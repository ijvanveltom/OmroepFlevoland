import React from 'react';
import ReactQuill from 'react-quill';
import OpenInFull from '@mui/icons-material/OpenInFull';

const CustomButton = () => <span><OpenInFull/></span>;

function fullScreen() {
  const elem = document.body;
  if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
      if (elem.requestFullScreen) {
          elem.requestFullScreen();
      } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullScreen) {
          elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
      }
  } else {
      if (document.cancelFullScreen) {
          document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
  }
}

const CustomToolbar = () => ( 
  <div id="toolbar">
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-underline" />
    <button className="ql-list" value="bullet" />
    <button className="ql-link" />
    <button className="ql-fullScreen">
      <CustomButton />
    </button>
  </div>
);

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: props.value, oldText : "" };
    this.handleChange = this.handleChange.bind(this);
    
    this.modules = {
      toolbar: {
        container: "#toolbar",
        handlers: {
          fullScreen: fullScreen
        }
      },
      clipboard: {
        matchVisual: false,
      }
    };
  
    this.formats = [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "color"
    ];
  }

  componentDidUpdate = (props) => {
    if (props.value !== this.state.oldText) {
      this.state.oldText = props.value;
      this.handleChange(props.value);
    }
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
    this.props.onChange(this.state.editorHtml);
  }

  render() {
    return (
      <div className="text-editor leftEditorFix">
        <CustomToolbar />
        <ReactQuill
          value={this.state.editorHtml}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          modules={this.modules}
          formats={this.formats}
          theme={"snow"}
          defaultValue=''
        />
      </div>
    );
  }
}

export default Editor;
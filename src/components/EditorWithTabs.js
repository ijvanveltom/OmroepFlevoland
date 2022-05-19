import React from 'react';
import ReactQuill from 'react-quill';
import Tv from '@mui/icons-material/Tv';
import Radio from '@mui/icons-material/Radio';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';

const CustomToolbarTabs = () => (
  <div id="toolbartabs">
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-underline" />
    <button className="ql-list" value="bullet" />
    <button className="ql-link" />
    <button className="ql-tv">
      <span><Tv/></span>
    </button>
    <button className="ql-radio">
      <span><Radio/></span>
    </button>
    <button className="ql-twitter">
      <span><Twitter/></span>
    </button>
    <button className="ql-instagram">
      <span><Instagram/></span>
    </button>
  </div>
);

class EditorWithTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: props.value, oldText : ""  };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate = (props) => {
    console.log(props.editing);
    if(props.editing == "true") {
      if (props.value !== this.state.oldText) {
        this.state.oldText = props.value;
        this.handleChange(props.value);
      }
    }
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
    this.props.onChange(this.state.editorHtml);
  }

  render() {
    return (
      <div className="text-editor">
        <CustomToolbarTabs />
        <ReactQuill
          value={this.state.editorHtml}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          modules={EditorWithTabs.modules}
          formats={EditorWithTabs.formats}
          theme={"snow"}
          defaultValue=''
        />
      </div>
    );
  }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
EditorWithTabs.modules = {
  toolbar: {
    container: "#toolbartabs",
  },
  clipboard: {
    matchVisual: false,
  }
};

/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
EditorWithTabs.formats = [
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

export default EditorWithTabs;
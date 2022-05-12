import React, { useeffect } from 'react';
import ReactQuill from 'react-quill';

import EditorWithTabs from './EditorWithTabs';
import Dialog from "@mui/material/Dialog";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';

import CloseIcon from '@mui/icons-material/Close';
import OpenInFull from '@mui/icons-material/OpenInFull';

//Open full editor screen
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomButton = () => <span><OpenInFull/></span>;

function toggleFullScreen(elem) {
  // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
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

function toggleFullScreenSafety(elem) {
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

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      openFullscreen: false
    }

    this.modules = {
      toolbar: {
        container: "#toolbar",
        handlers: {
          fullScreen: this.handleClickOpen
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

  handleChange(value) {
    this.setState({ editorHtml: value });
    this.props.onChange(this.state.editorHtml);
  }

  handleClickOpen = () => {
    this.setState({openFullscreen:true});
  };

  handleClose = (elem) => {
    this.setState({openFullscreen:false});
    toggleFullScreenSafety(elem);
  };

  render() {
    return (
      <div style={{width:'100%',}}>
        <div className="text-editor leftEditorFix">
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
        <div>
          
          <Dialog fullScreen open={this.state.openFullscreen} onClose={this.handleClose} TransitionComponent={Transition}>
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={() => this.handleClose(document.body)} aria-label="close">
                  <CloseIcon/>
                </IconButton>
                <IconButton color="inherit" onClick={() => toggleFullScreen(document.body)} aria-label="fullscreen">
                  <OpenInFull/>
                </IconButton>
              </Toolbar>
            </AppBar>
            <Box sx={{display:'flex', height:'100%'}}>
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
              <ReactQuill
                value={this.state.editorHtml}
                onChange={this.handleChange}
                placeholder={this.props.placeholder}
                modules={this.modules}
                formats={this.formats}
                theme={"snow"}
                defaultValue=''
              />
              <EditorWithTabs placeholder={"Begin een verhaal..."} theme="snow" sx={{width: '50%', height: '100%',}}/>
            </Box>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default Editor;
import React from 'react';
import ReactQuill from 'react-quill';

const CustomTab = () => <span>TV</span>;

function fullScreen() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}

const CustomToolbarTabs = () => (
  <div id="toolbartabs">
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-underline" />
    <button className="ql-list" value="bullet" />
    <button className="ql-link" />
    <button className="ql-fullScreen">
      <CustomTab />
    </button>
  </div>
);

class EditorWithTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  render() {
    return (
      <div className="text-editor">
        <CustomToolbarTabs />
        <ReactQuill
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          modules={EditorWithTabs.modules}
          formats={EditorWithTabs.formats}
          theme={"snow"} // pass false to use minimal theme
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
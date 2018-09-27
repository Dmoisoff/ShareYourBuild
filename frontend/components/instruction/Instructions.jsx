import React from "react";
import { withRouter } from "react-router-dom";
import WysiwygContainer from "./../rich_text_editor/WysiwygContainer";

class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.instruction;
    this.updateTitle = this.updateTitle.bind(this);
    this.passBackInfo = this.passBackInfo.bind(this);
    this.removeMedia = this.removeMedia.bind(this);
    this.passBackInfo();
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateDescription(input) {
    const regex = /<[a-z]*>|<\/[a-z]*>/g;
    const filteredInput = input.replace(regex, "");
    if (filteredInput === "") {
      this.props.instructionBodiesState(false, this.state.step);
    } else {
      this.props.instructionBodiesState(true, this.state.step);
    }
    this.setState({ body: input });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps || this.state !== prevState) {
      this.passBackInfo();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.step !== nextProps.step) {
      this.setState({ step: nextProps.step });
    }
  }

  errors() {
    if (!this.props.errors) {
      return [];
    } else {
      return this.props.errors.map((error, i) => {
        return (
          <li className="project-errors" key={i}>
            {error}
          </li>
        );
      });
    }
  }

  passBackInfo() {
    this.props.aggregateInstructionData(this.state);
  }

  removeMedia(index) {
    if (this.state.images.length === 1) {
      this.setState({ images: [], imagesUrl: [], imagesStorageId: [] });
    } else if (this.state.images.length - 1 === index) {
      const newImages = this.state.images.slice(
        0,
        this.state.images.length - 1
      );
      const newPreviewImages = this.state.imagesUrl.slice(
        0,
        this.state.imagesUrl.length - 1
      );
      const imagesStoraged = this.state.imagesStorageId.slice(
        0,
        this.state.imagesStorageId.length - 1
      );
      this.setState({
        images: newImages,
        imagesUrl: newPreviewImages,
        imagesStorageId: imagesStoraged
      });
    } else {
      const newImages = [
        ...this.state.images.slice(0, index),
        ...this.state.images.slice(index + 1)
      ];
      const newPreviewImages = [
        ...this.state.imagesUrl.slice(0, index),
        ...this.state.imagesUrl.slice(index + 1)
      ];
      const imagesStoraged = [
        ...this.state.imagesStorageId.slice(0, index),
        ...this.state.imagesStorageId.slice(index + 1)
      ];
      this.setState({
        images: newImages,
        imagesUrl: newPreviewImages,
        imagesStorageId: imagesStoraged
      });
    }
  }

  displayMedia() {
    let position;
    let alignment;
    const format = "instruction-show-image-scale";
    if (this.state.images.length === 1) {
      position = "multiple-images-position-instruction-1";
      alignment = "multiple-images-aligment-instruction";
    } else {
      position = "multiple-images-position-instruction-2";
    }
    let imagesUrl = this.state.imagesUrl.slice(-4);
    imagesUrl = imagesUrl.map((imageUrl, index) => {
      let boundRemove = this.removeMedia.bind(this, index);
      if (this.state.imagesUrl.length !== 1) {
        alignment = "multiple-images-aligment-instruction-" + index;
      }
      return (
        <div key={index} className={alignment}>
          <img className={format} src={imageUrl} />
          <div>
            <button
              value={index}
              className="project-submit"
              onClick={e => {
                e.preventDefault();
                boundRemove();
              }}
            >
              Remove Image
            </button>
          </div>
        </div>
      );
    });
    const imagesUrlGroup1 = imagesUrl.slice(0, 2);
    const imagesUrlGroup2 = imagesUrl.slice(2);

    return (
      <div className="project-show-image-placement">
        <p className="center">Picture Preview</p>
        <div className={position}>{imagesUrlGroup1}</div>
        <div className={position}>{imagesUrlGroup2}</div>
      </div>
    );
  }

  uploadFile(e) {
    let files = Object.values(e.currentTarget.files);
    if (files.length > 4) {
      files = files.slice(0, 4);
    }
    files.forEach(file => {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        const images = this.state.images.slice(-3);
        const imagesUrl = this.state.imagesUrl.slice(-3);
        this.setState({
          images: [...images, file],
          imagesUrl: [...imagesUrl, fileReader.result]
        });
      };
      fileReader.readAsDataURL(file);
    });
  }

  render() {
    const preview = this.state.mediaUrl ? (
      <div className="project-picture-preview-format">
        <p>Picture Preview</p>
        <img className="project-image-resize" src={this.state.mediaUrl} />
        <button
          className="project-submit"
          onClick={() => {
            this.setState({ mediaUrl: null, media: null });
          }}
        >
          Remove Image
        </button>
      </div>
    ) : null;

    const preview2 = this.state.images.length ? this.displayMedia() : null;

    return (
      <div className="instruction-form-positioning">
        <div className="project-form-styling">
          <form className="project-input-format" encType="multipart/form-data">
            <div>
              <p>Step {this.state.step}:</p>
              <input
                className="project-title-styling"
                type="text"
                onChange={this.updateTitle}
                placeholder="Step title (optional)"
                value={`${this.state.title}`}
              />
            </div>
            <div className="project-images-display-create-format">
              <div className="project-image-input-format">
                <div>
                  <p className="project-image-text">
                    Please select up to four a pictures for each step
                  </p>
                  <input
                    multiple="true"
                    className="project-body-input"
                    type="file"
                    accept="image/*"
                    onChange={this.uploadFile.bind(this)}
                  />
                </div>
                {preview2}
              </div>
            </div>
            <p>Description</p>
            <WysiwygContainer
              body={this.state.body}
              step={this.state.step}
              updateDescription={this.updateDescription.bind(this)}
            />
            <div>
              <button
                form="submit-project"
                onClick={() => this.props.removeInstruction(this.state.step)}
                className="project-submit"
                type="submit"
              >
                Remove Instruction
              </button>
            </div>
          </form>
        </div>
        <div className="project-message-position" />
        <div className="project-message-position">
          <ul className="project-errors-container">{this.errors()}</ul>
        </div>
      </div>
    );
  }
}

export default Instructions;

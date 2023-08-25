import PropTypes from "prop-types";

const Feedback = ({ children }) => {
  return (
    <div className="shadow-md shadow-slate-700 rounded-lg bg-[hsl(219,30%,18%)] p-8 max-md:p-4 flex flex-col gap-5 text-white">
      {children}
    </div>
  );
};
export default Feedback;
const FeedbackText = ({ children }) => {
  return (
    <div className="max-md:text-sm">
      <p>{children}</p>
    </div>
  );
};

const FeedbackImage = ({ src }) => {
  return (
    <div className="feedback__image">
      <img
        src={src}
        alt="picture of a person"
        className="bg-slate-300 rounded-full w-8"
      />
    </div>
  );
};

const FeedbackName = ({ name }) => {
  return <h3 className="feedback__name text-sm font-medium">{name}</h3>;
};

const FeedbackPosition = ({ position }) => {
  return <span className="text-xs">{position}</span>;
};

const FeedbackInfoContainer = ({ children }) => {
  return (
    <div className="feedback__info-container flex items-center gap-3">
      {children}
    </div>
  );
};

const FeedbackInfo = ({ children }) => {
  return <div className="feedback__info flex flex-col">{children}</div>;
};

Feedback.ContainerInfo = FeedbackInfoContainer;
Feedback.ContainerInfo.Info = FeedbackInfo;
Feedback.Text = FeedbackText;
Feedback.ContainerInfo.Image = FeedbackImage;
Feedback.ContainerInfo.Info.Name = FeedbackName;
Feedback.ContainerInfo.Info.Position = FeedbackPosition;

FeedbackInfoContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

Feedback.propTypes = {
  children: PropTypes.node.isRequired,
};

FeedbackInfo.propTypes = {
  children: PropTypes.node.isRequired,
};
FeedbackText.propTypes = {
  children: PropTypes.node.isRequired,
};

FeedbackImage.propTypes = {
  src: PropTypes.string.isRequired,
};

FeedbackName.propTypes = {
  name: PropTypes.string.isRequired,
};

FeedbackPosition.propTypes = {
  position: PropTypes.string.isRequired,
};

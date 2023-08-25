import propTypes from "prop-types";

const BenefitItem = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center text-white">
      {children}
    </div>
  );
};
export default BenefitItem;
const BenefitItemIcon = ({ children }) => {
  return <div>{children}</div>;
};

const BenefitItemHeading = ({ children }) => {
  return <h3 className="font-bold mt-8 mb-2 text-lg">{children}</h3>;
};

const BenefitItemDescription = ({ children }) => {
  return (
    <p className="max-w-sm text-gray-200 text-center mb-6">
      {children}
    </p>
  );
};

BenefitItem.Heading = BenefitItemHeading;
BenefitItem.Description = BenefitItemDescription;
BenefitItem.Icon = BenefitItemIcon;

BenefitItem.propTypes = {
  children: propTypes.node.isRequired,
};
BenefitItemIcon.propTypes = {
  children: propTypes.node.isRequired,
};
BenefitItemHeading.propTypes = {
  children: propTypes.node.isRequired,
};
BenefitItemDescription.propTypes = {
  children: propTypes.node.isRequired,
};

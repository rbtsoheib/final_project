import PropTypes from "prop-types";

const PropTypes = ({props}) => {
    
  return(
    <div>
      <h1 className="text-5xl">{props}</h1>
    </div>
  );
};

PropTypes.propTypes = {

  props: PropTypes.object.isRequired,

}

export default PropTypes;
import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdArrowDropupCircle = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="M928 512c0-229.75-186.25-416-416-416s-416 186.25-416 416 186.25 416 416 416 416-186.25 416-416zM704 576h-384l192-192 192 192z"></path>
    </SVG>
  )
}


MdArrowDropupCircle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdArrowDropupCircle.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default MdArrowDropupCircle

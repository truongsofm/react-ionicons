import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosSkipForwardOutline = props => {
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
      <path d="M674 192v283.6l-482-283.6v640l482-283.6v283.6h158v-640h-158zM657.8 520.8l-433.8 255.2v-528l449 264-15.2 8.8zM800 800h-94v-576h94v576z"></path>
    </SVG>
  )
}


IosSkipForwardOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSkipForwardOutline.propTypes = {
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


export default IosSkipForwardOutline

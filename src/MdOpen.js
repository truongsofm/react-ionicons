import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdOpen = props => {
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
      <path d="M810.68 810.664h-597.36v-597.328h266.68v-85.336h-266.68c-46.938 0-85.32 38.394-85.32 85.336v597.328c0 46.942 38.382 85.336 85.32 85.336h597.36c46.938 0 85.32-38.394 85.32-85.336v-266.664h-85.32v266.664zM576 128v85.336h174.948l-430.95 430.93 59.732 59.732 430.952-430.94v174.942h85.318v-320h-320z"></path>
    </SVG>
  )
}


MdOpen.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdOpen.propTypes = {
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


export default MdOpen

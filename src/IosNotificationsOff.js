import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosNotificationsOff = props => {
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
      <path d="M415.6 800c0 54 43.2 96 96.2 96s96.2-42 96.2-96h-192.4z M267.6 64l-27.6 16.2 516.4 879.8 27.6-16.2z M747.8 458c0-198.2-98-265.8-189.8-281.2 0-1.2 0.2-2.2 0.2-3.4 0-25.4-20.6-46-46-46s-46 20.6-46 46c0 1.2 0 2.4 0.2 3.6-26.2 4.4-53 13.2-77.8 28l329.4 562.8h146c-70.8-64-116.2-78-116.2-309.8z M276.2 458.4c0 231.8-45 245.6-116.2 309.6h445.8l-287.8-492c-25.6 42.8-41.8 101.8-41.8 182.4z"></path>
    </SVG>
  )
}


IosNotificationsOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosNotificationsOff.propTypes = {
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


export default IosNotificationsOff

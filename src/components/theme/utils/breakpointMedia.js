import { breakpoints } from "../index";
import { css } from "styled-components"

export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);

  const result = breakpointsNames.map((breakpointName => {
    return css`
      @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `
  }))

  return result
}
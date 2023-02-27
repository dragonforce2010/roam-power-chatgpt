import { Toaster, Position } from '@blueprintjs/core'

export const ErrorToaster = Toaster.create({
  className: 'recipe-toaster',
  position: Position.TOP
}, document.body)
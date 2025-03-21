type UserId = `user-${number}`
const userId: UserId = `user-123`

type ErrorMessage = `Error: ${string}`
const newError: ErrorMessage = 'Error: Not found'

type Class = 'primary' | 'secondary' | 'danger'
type CssClass = `btn-${Class}`
const newClass: CssClass = 'btn-secondary'
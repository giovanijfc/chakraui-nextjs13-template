import { ButtonTheme } from './Button/ButtonTheme'
import { CheckboxTheme } from './Form/Checkbox/CheckboxTheme'
import { FormControlTheme } from './Form/FormControl/FormControlTheme'
import { FormErrorMessageTheme } from './Form/FormErrorMessage/FormErrorMessageTheme'
import { FormLabelTheme } from './Form/FormLabel/FormLabelTheme'
import { InputTheme } from './Form/Input/InputTheme'
import { SpinnerTheme } from './Spinner/SpinnerTheme'

export const components = {
  Button: ButtonTheme,
  Spinner: SpinnerTheme,
  Input: InputTheme,
  Form: FormControlTheme,
  FormError: FormErrorMessageTheme,
  FormLabel: FormLabelTheme,
  Checkbox: CheckboxTheme
}

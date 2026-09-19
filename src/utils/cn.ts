export type ClassnameValue = string | false | null | undefined

export const cn = (...args: ClassnameValue[]) => {
  return args.filter(Boolean).join(' ')
}

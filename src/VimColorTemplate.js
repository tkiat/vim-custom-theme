import ReactDOMServer from 'react-dom/server'

const ConvCode = (code) => {
  return (code === 256 ? 'NONE' : code)
}
// const ColorTemplate = () => ReactDOMServer.renderToString(noob())
const ColorTemplate = (theme) => (
`" ========================================
"                                  General
" ========================================
let g:colors_name = "custom"

set t_Co=256
set background=dark

highlight clear
" ========================================
"                                Highlight
" ========================================
" grp1 fg
hi Directory        ctermfg=${ConvCode(theme.grp1.fgCode)} ctermbg=${ConvCode(theme.grp1.bgCode)} cterm=NONE
hi Constant         ctermfg=${ConvCode(theme.grp1.fgCode)} ctermbg=${ConvCode(theme.grp1.bgCode)} cterm=NONE
" grp2
hi Statement        ctermfg=${ConvCode(theme.grp2.fgCode)} ctermbg=${ConvCode(theme.grp2.bgCode)} cterm=NONE
" grp3
hi Nontext          ctermfg=${ConvCode(theme.grp3.fgCode)} ctermbg=${ConvCode(theme.grp3.bgCode)} cterm=NONE
hi Specialkey       ctermfg=${ConvCode(theme.grp3.fgCode)} ctermbg=${ConvCode(theme.grp3.bgCode)} cterm=NONE
" grp4
hi Comment          ctermfg=${ConvCode(theme.grp4.fgCode)} ctermbg=${ConvCode(theme.grp4.bgCode)} cterm=NONE
hi LineNr           ctermfg=${ConvCode(theme.grp4.fgCode)} ctermbg=${ConvCode(theme.grp4.bgCode)} cterm=NONE
" grp5
hi Type             ctermfg=${ConvCode(theme.grp5.fgCode)} ctermbg=${ConvCode(theme.grp5.bgCode)} cterm=NONE
" grp6
hi Special          ctermfg=${ConvCode(theme.grp6.fgCode)} ctermbg=${ConvCode(theme.grp6.bgCode)} cterm=NONE
" grp7
hi Identifier       ctermfg=${ConvCode(theme.grp7.fgCode)} ctermbg=${ConvCode(theme.grp7.bgCode)} cterm=NONE
hi Preproc          ctermfg=${ConvCode(theme.grp7.fgCode)} ctermbg=${ConvCode(theme.grp7.bgCode)} cterm=NONE
" grp8
hi Normal           ctermfg=${ConvCode(theme.grp8.fgCode)} ctermbg=${ConvCode(theme.grp8.bgCode)} cterm=NONE
hi ModeMsg          ctermfg=${ConvCode(theme.grp8.fgCode)} ctermbg=${ConvCode(theme.grp8.bgCode)} cterm=NONE
hi Question         ctermfg=${ConvCode(theme.grp8.fgCode)} ctermbg=${ConvCode(theme.grp8.bgCode)} cterm=NONE
hi TabLineFill      ctermfg=${ConvCode(theme.grp8.fgCode)} ctermbg=${ConvCode(theme.grp8.bgCode)} cterm=NONE
hi Title            ctermfg=${ConvCode(theme.grp8.fgCode)} ctermbg=${ConvCode(theme.grp8.bgCode)} cterm=NONE
" grp9
hi Folded           ctermfg=${ConvCode(theme.grp9.fgCode)} ctermbg=${ConvCode(theme.grp9.bgCode)} cterm=NONE
hi FoldColumn       ctermfg=${ConvCode(theme.grp9.fgCode)} ctermbg=${ConvCode(theme.grp9.bgCode)} cterm=NONE

hi CursorLine       ctermfg=NONE ctermbg=${ConvCode(theme.grp9.bgCode)} cterm=NONE
hi CursorLineNr     ctermfg=${ConvCode(theme.grp9.bgCode)} ctermbg=${ConvCode(theme.grp9.fgCode)} cterm=NONE
" grp10
hi Pmenu            ctermfg=${ConvCode(theme.grp10.fgCode)} ctermbg=${ConvCode(theme.grp10.bgCode)} cterm=NONE
hi PmenuSbar        ctermfg=${ConvCode(theme.grp10.fgCode)} ctermbg=${ConvCode(theme.grp10.bgCode)} cterm=NONE
hi StatusLine       ctermfg=${ConvCode(theme.grp10.fgCode)} ctermbg=${ConvCode(theme.grp10.bgCode)} cterm=NONE
hi StatusLineTerm   ctermfg=${ConvCode(theme.grp10.fgCode)} ctermbg=${ConvCode(theme.grp10.bgCode)} cterm=NONE
hi TablineSel       ctermfg=${ConvCode(theme.grp10.fgCode)} ctermbg=${ConvCode(theme.grp10.bgCode)} cterm=NONE
hi Visual           ctermfg=${ConvCode(theme.grp10.fgCode)} ctermbg=${ConvCode(theme.grp10.bgCode)} cterm=NONE
" grp11
hi PmenuThumb       ctermfg=${ConvCode(theme.grp11.fgCode)} ctermbg=${ConvCode(theme.grp11.bgCode)} cterm=NONE
hi PmenuSel         ctermfg=${ConvCode(theme.grp11.fgCode)} ctermbg=${ConvCode(theme.grp11.bgCode)} cterm=NONE
hi StatusLineNC     ctermfg=${ConvCode(theme.grp11.fgCode)} ctermbg=${ConvCode(theme.grp11.bgCode)} cterm=NONE
hi StatusLineTermNC ctermfg=${ConvCode(theme.grp11.fgCode)} ctermbg=${ConvCode(theme.grp11.bgCode)} cterm=NONE
hi Tabline          ctermfg=${ConvCode(theme.grp11.fgCode)} ctermbg=${ConvCode(theme.grp11.bgCode)} cterm=NONE
" grp12
hi Error            ctermfg=${ConvCode(theme.grp12.fgCode)} ctermbg=${ConvCode(theme.grp12.bgCode)} cterm=NONE
hi ErrorMsg         ctermfg=${ConvCode(theme.grp12.fgCode)} ctermbg=${ConvCode(theme.grp12.bgCode)} cterm=NONE
hi DiffDelete       ctermfg=${ConvCode(theme.grp12.fgCode)} ctermbg=${ConvCode(theme.grp12.bgCode)} cterm=NONE
" grp13
hi Search           ctermfg=${ConvCode(theme.grp13.fgCode)} ctermbg=${ConvCode(theme.grp13.bgCode)} cterm=NONE
hi DiffAdd          ctermfg=${ConvCode(theme.grp13.fgCode)} ctermbg=${ConvCode(theme.grp13.bgCode)} cterm=NONE
hi DiffChange       ctermfg=${ConvCode(theme.grp13.fgCode)} ctermbg=${ConvCode(theme.grp13.bgCode)} cterm=NONE

hi IncSearch        ctermfg=${ConvCode(theme.grp13.bgCode)} ctermbg=${ConvCode(theme.grp13.fgCode)} cterm=NONE
hi MatchParen       ctermfg=${ConvCode(theme.grp13.bgCode)} ctermbg=${ConvCode(theme.grp13.fgCode)} cterm=NONE
`
)

export default ColorTemplate

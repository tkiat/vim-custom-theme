import {getHighlightColor} from './constants.js'

const Config = (fgCode, bgCode, cterm='NONE', gui='NONE') => {
  return `ctermfg=${fgCode === 256 ? 'NONE' : fgCode} ctermbg=${bgCode === 256 ? 'NONE' : bgCode} cterm=${cterm} guifg=${fgCode === 256 ? 'NONE' : getHighlightColor(fgCode)} guibg=${bgCode === 256 ? 'NONE' : getHighlightColor(bgCode)} gui=${gui}`
}

const ColorTemplate = (theme) => (
`" Source: https://github.com/tkiat/vim-custom-theme
" ========================================
"                                  General
" ========================================
let g:colors_name = "custom"

set t_Co=256
set background=${theme.background}

highlight clear
" ========================================
"                                Highlight
" ========================================
" grp1 fg
hi Directory        ${Config(theme.grp1.fgCode, theme.grp1.bgCode)}
hi Constant         ${Config(theme.grp1.fgCode, theme.grp1.bgCode)}
" grp2
hi Statement        ${Config(theme.grp2.fgCode, theme.grp2.bgCode)}
" grp3
hi Nontext          ${Config(theme.grp3.fgCode, theme.grp3.bgCode)}
hi Specialkey       ${Config(theme.grp3.fgCode, theme.grp3.bgCode)}
" grp4
hi Comment          ${Config(theme.grp4.fgCode, theme.grp4.bgCode)}
hi LineNr           ${Config(theme.grp4.fgCode, theme.grp4.bgCode)}
" grp5
hi Type             ${Config(theme.grp5.fgCode, theme.grp5.bgCode)}
" grp6
hi Special          ${Config(theme.grp6.fgCode, theme.grp6.bgCode)}
" grp7
hi Identifier       ${Config(theme.grp7.fgCode, theme.grp7.bgCode)}
hi Preproc          ${Config(theme.grp7.fgCode, theme.grp7.bgCode)}
" grp8
hi Normal           ${Config(theme.grp8.fgCode, theme.grp8.bgCode)}
hi ModeMsg          ${Config(theme.grp8.fgCode, theme.grp8.bgCode)}
hi Question         ${Config(theme.grp8.fgCode, theme.grp8.bgCode)}
hi TabLineFill      ${Config(theme.grp8.fgCode, theme.grp8.bgCode)}
hi Title            ${Config(theme.grp8.fgCode, theme.grp8.bgCode)}
" grp9
hi Folded           ${Config(theme.grp9.fgCode, theme.grp9.bgCode)}
hi FoldColumn       ${Config(theme.grp9.fgCode, theme.grp9.bgCode)}

hi CursorLine       ${Config(256, theme.grp9.bgCode)}
hi CursorLineNr     ${Config(theme.grp9.bgCode, theme.grp9.fgCode)}
" grp10
hi Pmenu            ${Config(theme.grp10.fgCode, theme.grp10.bgCode)}
hi PmenuSbar        ${Config(theme.grp10.fgCode, theme.grp10.bgCode)}
hi StatusLine       ${Config(theme.grp10.fgCode, theme.grp10.bgCode)}
hi StatusLineTerm   ${Config(theme.grp10.fgCode, theme.grp10.bgCode)}
hi TablineSel       ${Config(theme.grp10.fgCode, theme.grp10.bgCode)}
hi Visual           ${Config(theme.grp10.fgCode, theme.grp10.bgCode)}
" grp11
hi PmenuThumb       ${Config(theme.grp11.fgCode, theme.grp11.bgCode)}
hi PmenuSel         ${Config(theme.grp11.fgCode, theme.grp11.bgCode)}
hi StatusLineNC     ${Config(theme.grp11.fgCode, theme.grp11.bgCode)}
hi StatusLineTermNC ${Config(theme.grp11.fgCode, theme.grp11.bgCode)}
hi Tabline          ${Config(theme.grp11.fgCode, theme.grp11.bgCode)}
" grp12
hi Error            ${Config(theme.grp12.fgCode, theme.grp12.bgCode)}
hi ErrorMsg         ${Config(theme.grp12.fgCode, theme.grp12.bgCode)}
hi DiffDelete       ${Config(theme.grp12.fgCode, theme.grp12.bgCode)}
" grp13
hi Search           ${Config(theme.grp13.fgCode, theme.grp13.bgCode)}
hi DiffAdd          ${Config(theme.grp13.fgCode, theme.grp13.bgCode)}
hi DiffChange       ${Config(theme.grp13.fgCode, theme.grp13.bgCode)}

hi IncSearch        ${Config(theme.grp13.bgCode, theme.grp13.fgCode)}
hi MatchPare        ${Config(theme.grp13.bgCode, theme.grp13.fgCode)}
`
)

export default ColorTemplate

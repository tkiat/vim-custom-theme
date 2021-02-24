" ========================================
"                                  General
" ========================================
let g:colors_name = "test"

set t_Co=256
set background=dark

highlight clear
" ========================================
"                                Highlight
" ========================================
" grp1 fg 
hi Directory        ctermfg=214  ctermbg=NONE cterm=NONE
hi Constant         ctermfg=214  ctermbg=NONE cterm=NONE
" grp2
hi Statement        ctermfg=149  ctermbg=NONE cterm=NONE
" grp3
hi Nontext          ctermfg=67   ctermbg=NONE cterm=NONE
hi Specialkey       ctermfg=67   ctermbg=NONE cterm=NONE
" grp4
hi Comment          ctermfg=245  ctermbg=NONE cterm=NONE
hi LineNr           ctermfg=245  ctermbg=NONE cterm=NONE
" grp5
hi Type             ctermfg=123  ctermbg=NONE cterm=NONE
" grp6
hi Special          ctermfg=205  ctermbg=NONE cterm=NONE
" grp7
hi Identifier       ctermfg=75   ctermbg=NONE cterm=NONE
hi Preproc          ctermfg=75   ctermbg=NONE cterm=NONE
" grp8
hi Normal           ctermfg=15   ctermbg=233  cterm=NONE
hi ModeMsg          ctermfg=15   ctermbg=233  cterm=NONE
hi Question         ctermfg=15   ctermbg=233  cterm=NONE
hi TabLineFill      ctermfg=15   ctermbg=233  cterm=NONE
hi Title            ctermfg=15   ctermbg=233  cterm=NONE
" grp9
hi Folded           ctermfg=245  ctermbg=236  cterm=NONE
hi FoldColumn       ctermfg=245  ctermbg=236  cterm=NONE

hi CursorLine       ctermfg=NONE ctermbg=236  cterm=NONE
hi CursorLineNr     ctermfg=236  ctermbg=245  cterm=NONE
" grp10
hi Pmenu            ctermfg=0    ctermbg=252  cterm=NONE
hi PmenuSbar        ctermfg=0    ctermbg=252  cterm=NONE
hi StatusLine       ctermfg=0    ctermbg=252  cterm=NONE
hi StatusLineTerm   ctermfg=0    ctermbg=252  cterm=NONE
hi TablineSel       ctermfg=0    ctermbg=252  cterm=NONE
hi Visual           ctermfg=0    ctermbg=252  cterm=NONE
" grp11
hi PmenuThumb       ctermfg=0    ctermbg=245  cterm=NONE
hi PmenuSel         ctermfg=0    ctermbg=245  cterm=NONE
hi StatusLineNC     ctermfg=0    ctermbg=245  cterm=NONE
hi StatusLineTermNC ctermfg=0    ctermbg=245  cterm=NONE
hi Tabline          ctermfg=0    ctermbg=245  cterm=NONE
" grp12
hi Error            ctermfg=15   ctermbg=9    cterm=NONE
hi ErrorMsg         ctermfg=15   ctermbg=9    cterm=NONE
hi DiffDelete       ctermfg=15   ctermbg=9    cterm=NONE
" grp13
hi Search           ctermfg=0    ctermbg=214  cterm=NONE
hi DiffAdd          ctermfg=0    ctermbg=214  cterm=NONE
hi DiffChange       ctermfg=0    ctermbg=214  cterm=NONE

hi IncSearch        ctermfg=214  ctermbg=0    cterm=NONE
hi MatchParen       ctermfg=214  ctermbg=0    cterm=NONE

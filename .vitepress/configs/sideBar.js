import { generateSidebar } from 'vitepress-sidebar'

const globalOptions = {
  documentRootPath: 'src',
  collapsed: true,
  collapseDepth: 2,
  underscoreToSpace: true,
  // useTitleFromFileHeading,
  includeFolderIndexFile: true,
}

const sideBars = [
  {
    scanStartPath: '哲思_人文_社科',
    resolvePath: '/哲思_人文_社科/',
  },
  {
    scanStartPath: '护肤',
    resolvePath: '/护肤/',
  },
  {
    scanStartPath: '自然科学',
    resolvePath: '/自然科学/',
  }
]

const mergedSideBars = sideBars.map(sidebar => ({
  ...globalOptions,
  ...sidebar
}))

export const sideBar = generateSidebar(mergedSideBars)
import { AppBar, Tab, Tabs } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  location: { pathname: string }
}

const tabItems: Array<{ label: string; to: string }> = [
  { label: 'Summary', to: '/' },
  { label: 'Apache', to: '/apache' },
  { label: 'Architecture', to: '/architecture' },
  { label: 'AWS', to: '/aws' },
  { label: 'Browser', to: '/browser' },
  { label: 'CI', to: '/ci' },
  { label: 'Compiler', to: '/compiler' },
  { label: 'CSS', to: '/css' },
  { label: 'Design', to: '/design' },
  { label: 'Docker', to: '/docker' },
  { label: 'Firebase', to: '/firebase' },
  { label: 'Go', to: '/go' },
  { label: 'Hardware', to: '/hardware' },
  { label: 'HTML', to: '/html' },
  { label: 'JS', to: '/js' },
  { label: 'Language', to: '/language' },
  { label: 'ML', to: '/ml' },
  { label: 'Mobile', to: '/mobile' },
  { label: 'Module Bundler', to: '/module-bundler' },
  { label: 'Network', to: '/network' },
  { label: 'Package Manager', to: '/package-manager' },
  { label: 'Programming', to: '/programming' },
  { label: 'Python', to: '/python' },
  { label: 'React', to: '/react' },
  { label: 'Scala', to: '/scala' },
  { label: 'Server', to: '/server' },
  { label: 'Swift', to: '/swift' },
  { label: 'Vue.js', to: '/vue' },
  { label: 'Words', to: '/words' },
  { label: 'Workflow Engine', to: '/workflow-engine' }
]

const Header = (props: Props): JSX.Element => (
  <AppBar position="static">
    <Tabs
      value={tabItems.findIndex(o => o.to === props.location.pathname)}
      scrollable={true}
      scrollButtons="off"
      data-test="category-tabs"
    >
      {tabItems.map(t => (
        <Tab
          key={t.label}
          label={t.label}
          component={(p: {}): JSX.Element => <Link to={t.to} {...p} />}
        />
      ))}
    </Tabs>
  </AppBar>
)

export default Header

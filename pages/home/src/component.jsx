import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Lazy from '@kuba/lazy'
import Site from '@kuba/site'
import Zone from '@kuba/zone'
import Exploration from './exploration'
import Hero from './hero'
import Workflow from './workflow'
import style from './style.css'

export default () =>
  <Site className={style.home}>
    <Header className={style.home__header} slot='header' />
    <Fragment slot='main'>
      <Hero className={style.home__hero} />
      <Exploration className={style.home__exploration} />
      <Zone className={style.home__zone}>
        <Workflow className={style.home__workflow} />
        <Lazy className={style.home__inspiration} require={() => import('@kuba/inspiration' /* webpackChunkName: "inspiration" */)} />
      </Zone>
    </Fragment>
  </Site>

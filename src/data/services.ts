import FixesIcon from '@/assets/icons/services/fixes.svg'
import FrontendIcon from '@/assets/icons/services/frontend.svg'
import FullstackIcon from '@/assets/icons/services/fullstack.svg'
import LandingIcon from '@/assets/icons/services/landing.svg'
import MobileIcon from '@/assets/icons/services/mobile.svg'
import MvpIcon from '@/assets/icons/services/mvp.svg'
import NextIcon from '@/assets/icons/services/nextgatsby.svg'
import WoocommerceIcon from '@/assets/icons/services/woocommerce.svg'
import WordpressIcon from '@/assets/icons/services/wordpress.svg'
import firebase from '@/assets/icons/services/wordpress.svg'


import {
  IconBrandFigma,
  IconBrandFirebase,
  IconBrandNodejs,
  IconBrandFlutter,
} from '@tabler/icons-react'

import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiDart,
  SiFirebase,
  SiMysql,
  SiGit,
  SiGithub,
  SiJupyter,
  SiPostman
} from "react-icons/si";

export const servicesList = [
  { nameKey: 'pythonDevelopment', Icon: MvpIcon },
  { nameKey: 'flutterDevelopment', Icon: MobileIcon },
  { nameKey: 'firebaseIntegration', Icon: firebase},
  { nameKey: 'restApiDevelopment', Icon: FullstackIcon },
  { nameKey: 'machineLearning', Icon: LandingIcon },
  { nameKey: 'dataAnalysis', Icon: NextIcon },
  { nameKey: 'automationScripts', Icon: WoocommerceIcon },
  { nameKey: 'databaseDesign', Icon: WordpressIcon },
  { nameKey: 'aiModelIntegration', Icon: FixesIcon }
]


export const frontendStack = [
{ Icon: SiPython, labelKey: "python" },
  { Icon: SiNumpy, labelKey: "numpy" },
  { Icon: SiPandas, labelKey: "pandas" },
  { Icon: SiScikitlearn, labelKey: "scikitLearn" },
  { Icon: SiTensorflow, labelKey: "tensorflow" },
  { Icon: SiPytorch, labelKey: "pytorch" },
  { Icon: SiOpencv, labelKey: "opencv" }
]
export const backendStack = [
  { Icon: IconBrandFlutter, labelKey: 'flutter' },
  { Icon: IconBrandFirebase, labelKey: 'firebase' },
  { Icon: SiDart, labelKey: "dart" },
  // { Icon: IconBrandPrisma, labelKey: 'prisma' },
  // { Icon: PostgresIcon, labelKey: 'postgresql' },
  // { Icon: IconBrandMongodb, labelKey: 'mongodb' }
]

export const websitesStack = [
  { Icon: IconBrandNodejs, labelKey: 'nodejs' },
  { Icon: SiMysql, labelKey: "mysql" },
  { Icon: SiFirebase, labelKey: "firestore" }
]

export const otherStack = [
  { Icon: SiGit, labelKey: "git" },
  { Icon: SiGithub, labelKey: "github" },
  { Icon: SiJupyter, labelKey: "jupyterNotebook" },
  { Icon: SiPostman, labelKey: "postman" },
  { Icon: IconBrandFigma, labelKey: 'figma' },
]

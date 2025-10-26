import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

const Social = () => {
  return (
    <div className='home__social'>
      <a href='https://github.com/uttkarsh123-shiv' className='home__social-icon' target='_blank' rel="noreferrer">
        <i className='uil uil-github-alt'></i>
      </a>
      <a href='https://www.linkedin.com/in/uttkarsh-singh450/' className='home__social-icon' target='_blank' rel="noreferrer">
        <i className='uil uil-linkedin'></i>
      </a>
      <a href='https://leetcode.com/u/Uttkarsh_2103/' className='home__social-icon' target='_blank' rel="noreferrer">
        {/* <i class="cib-leetcode"></i> */}
        <CIcon icon={icon.cibLeetcode} size="xl"/>
      </a>
    </div>
  )
}

export default Social
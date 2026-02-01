import './qualification.css'
import { educationData } from './qualificationData'

const Qualification = () => {
  // Content component to avoid repetition
  const QualificationContent = ({ data }) => (
    <div>
      <h3 className='qualification__title'>{data.title}</h3>
      <span className='qualification__subtitle'>{data.subtitle}</span>
      <div className='qualification__calendar'>
        <i className='uil uil-calendar-alt'></i> {data.period}
      </div>
      {data.role && (
        <p className='qualification__description'>
          <i className='uil uil-user'></i> {data.role}
        </p>
      )}
      {data.cgpa && (
        <div className='qualification__cgpa'>
          <i className='uil uil-award'></i> {data.cgpa}
        </div>
      )}
      {data.description && (
        <div className='qualification__description'>
          <i className='uil uil-trophy'></i>{data.description}
        </div>
      )}
    </div>
  );

  // Simplified QualificationItem
  const QualificationItem = ({ data, index, total }) => (
    <div className='qualification__data'>
      {index % 2 === 0 ? (
        <>
          <QualificationContent data={data} />
          <div>
            <span className='qualification__rounder'></span>
            {index !== total - 1 && <span className='qualification__line'></span>}
          </div>
        </>
      ) : (
        <>
          <div></div>
          <div>
            <span className='qualification__rounder'></span>
            {index !== total - 1 && <span className='qualification__line'></span>}
          </div>
          <QualificationContent data={data} />
        </>
      )}
    </div>
  );

  return (
    <section className='qualification section' id='qualifications'>
      <h2 className='section__title'>Education</h2>
      <span className='section__subtitle'>My Academic Journey</span>

      <div className='qualification__container container'>
        <div className='qualification__sections'>
          <div className='qualification__content qualification__content-active'>
            {educationData.map((item, index) => (
              <QualificationItem
                key={index}
                data={item}
                index={index}
                total={educationData.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
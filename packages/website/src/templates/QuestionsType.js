import { useParams } from '@reach/router'
import * as React from 'react'
import NotFound from '../components/404'
import questionConfig from '../components/portal/components/Questions/QuestionsConfig.json'
import Timeline from '../components/portal/components/TimeLine/Timeline'
// import RichText from "../components/rich-text"

const QuestionType = ({ data }) => {
  const { id } = useParams()
  const [is404, setIs404] = React.useState()
  const [filtered, setFiltered] = React.useState()
  const [name, setName] = React.useState()

  React.useEffect(() => {
    const found = questionConfig.questions.find(e => e.id === id)
    if (found?.id) {
      setIs404(false)
      setName(found.name)
      setFiltered(data.filter(e => e.question_category === found.name))
    } else {
      setIs404(true)
    }
  }, [id, data])

  return (
    <>
      {!is404 ? (
        <>
          {filtered?.length > 0 && <Timeline timeLine={filtered} name={name} />}
        </>
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default QuestionType

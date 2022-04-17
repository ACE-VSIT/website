import React, { useCallback, useEffect, useRef, useState } from "react"
import { Heading } from "../../../../styles/sharedStyles"
import TimelineCard from "./TimelineCard/TimelineCard"
import { TimelineWrapper } from "./TimelineElements"
import Loading from "../../../animations/Loading"

export default function Timeline({ data, name }) {
  const [height, setHeight] = useState(0)
  const wrapper = useRef()

  const getHeight = useCallback(() => {
    const height = wrapper?.current?.offsetHeight
    setHeight(height)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height])

  useEffect(() => {
    setTimeout(getHeight, 500)
  }, [getHeight])

  return (
    <>
      <Heading style={{ textAlign: "center", padding: "2rem 0 5rem 0" }}>
        {name}
      </Heading>
      {height !== 0 ? (
        <TimelineWrapper ref={wrapper} height={`${height}px`}>
          {data.map(
            (e, index) =>
              e?.show_question && (
                <TimelineCard
                  heading={e?.question_name.text}
                  level={e?.difficulty_level}
                  info={e?.question_info.richText}
                  align={index % 2 ? "start" : "end"}
                />
              )
          )}
        </TimelineWrapper>
      ) : (
        <Loading />
      )}
    </>
  )
}

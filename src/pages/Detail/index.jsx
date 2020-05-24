import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { DeatilCardImage, QuestionList } from './../../components/detail-section';
import { AppContext } from "./../../context";

import SORT_IMG from './../../assets/sort.svg';
import './Detail.sass';

export default function Detail() {
  const { feedData } = useContext(AppContext);
  const { slug } = useParams();
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [questionsSortIsDesc, setQuestionsSortIsDesc] = useState(true);

  useEffect(() => {
    const tmpSelectedDetail = feedData.find(i => i.slug === slug)
    if (tmpSelectedDetail) {
      setSelectedDetail(tmpSelectedDetail);
      setQuestions(tmpSelectedDetail.questions.map(i => {
        return { ...i, date: new Date(i.date) }
      }).sort((a, b) => {
        if (a.date > b.date) return -1;
        if (b.date > a.date) return 1;
        return 0;
      }))
    }
  }, []);

  const handleSortData = () => {
    setQuestions([...questions].sort((a, b) => {
      if (a.date > b.date) return !questionsSortIsDesc ? -1 : 1;
      if (b.date > a.date) return !questionsSortIsDesc ? 1 : -1;
      return 0;
    }))
    setQuestionsSortIsDesc(!questionsSortIsDesc)
  }


  if (!selectedDetail) {
    return (<>No data selected</>)
  }

  return (
    <div className="detail-container">
      <div className="row">
        <div className="col-6">
          <DeatilCardImage image={selectedDetail.image} tag={selectedDetail.tag} />
        </div>
        <div className="col-6">
          <div className="detail-right-section">
            <h1>{selectedDetail.title}</h1>
            <div>
              <a onClick={handleSortData}>sort by latest &nbsp;<img height="12" src={SORT_IMG} /></a>
            </div>
            <QuestionList items={questions} />
          </div>
        </div>
      </div>
    </div>
  )
}

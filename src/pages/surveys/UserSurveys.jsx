import React, { useEffect } from 'react'
import APIGetSurveys from '../../service/surveys/APIGetSurveys';

export const UserSurveys = () => {


  const ListSurvey = async () => {
    try {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const email = urlParams.get('email');
      const surveyId = urlParams.get('surveyId');

      console.log(email);
      console.log(surveyId);

      const surveys = await APIGetSurveys({email, surveyId});
      console.log(surveys)
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    ListSurvey();
  }, []);


  return (
    <div>surveys</div>
  )
}

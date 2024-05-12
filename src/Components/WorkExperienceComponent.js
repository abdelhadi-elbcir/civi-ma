import { Button, Divider, MenuItem, Paper, Select } from "@mui/material";
import React, { useState } from "react";
import "../Styles/WorkExperienceComponent.css";
import { connect } from "react-redux";
import BackNextBtnComponent from "./BackNextBtnComponent";
import { addAllExperience, addExperience } from "../Redux/actions";
import { useForm, Controller } from "react-hook-form";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";

const mapStateToProps = (state) => ({
  experiences: state.workExperienceReducer.experiences,
});

const mapDispatchToProps = (dispatch) => ({
  setExperience: (experience) => dispatch(addExperience(experience)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
});

const years = [];

for (let year = 2023; year >= 1980; year--) {
  years.push(year.toString());
}

const WorkExperienceComponent = (props) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const handleNext = (data) => {
    // console.log(data);
    setLoading(true);

    let experienceOne = {};
    let experienceTwo = {};
    let experienceThree = {};
    let experienceFour = {};

    for (let index in data) {
      // console.log(index.slice(0, index.length));
      if (index.includes("1")) {
        experienceOne[index.slice(0, index.length - 1)] = data[index];
      } else {
        experienceTwo[index.slice(0, index.length - 1)] = data[index];
      }
    }

    // console.log(experienceOne, experienceTwo);

    if (Object.keys(experienceTwo).length) {
      props.setAllExperience([
        { ...experienceOne, id: 1 },
        { ...experienceTwo, id: 2 },
        experienceThree && { ...experienceThree, id: 3 },
        experienceFour && { ...experienceFour, id: 4 },
      ].filter(Boolean));
    } else {
      props.setAllExperience([{ ...experienceOne, id: 1 }]);
    }

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  // console.log(props.experiences, errors);

  const addNewExperience = () => {
    props.setExperience({
      id: props.experiences.length + 1,
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    });
  };

  const editJobTitleExperience = (value, id) => {
    const newExperiences = props.experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, jobTitle: value };
      } else return experience;
    });

    props.setAllExperience(newExperiences);
  };

  const editOrganisationNameExperience = (value, id) => {
    const newExperiences = props.experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, organizationName: value };
      } else return experience;
    });

    props.setAllExperience(newExperiences);
  };

  return (
    <Paper className="work-experience-paper" elevation={3}>
      <h2 className="work-experience-heading">L'expérience professionnelle</h2>
      <form onSubmit={handleSubmit(handleNext)}>
        {props.experiences.map((experience) => {
          return (
            <div key={experience.id} className="experience-cont">
              <h3 className="experience-heading">Expérience {experience.id}</h3>
              <Divider sx={{ margin: "5px 0px" }} />
              <div className="experience-form-cont">
                <InputComponent
                  title={"Titre d'emploi"}
                  type={"text"}
                  name={"jobTitle" + experience.id}
                  register={register}
                  multiline={false}
                  value={experience.jobTitle}
                  setValue={(value) =>
                    editJobTitleExperience(value, experience.id)
                  }
                  error={Boolean(errors[`jobTitle${experience.id}`])}
                  errorMessage={
                    errors[`jobTitle${experience.id}`]
                      ? errors[`jobTitle${experience.id}`].message
                      : null
                  }
                />
                <InputComponent
                  title={"nom de l'organisation"}
                  type={"text"}
                  name={"organizationName" + experience.id}
                  register={register}
                  multiline={false}
                  value={experience.organizationName}
                  setValue={(value) =>
                    editOrganisationNameExperience(value, experience.id)
                  }
                  error={
                    errors[`organizationName${experience.id}`] ? true : false
                  }
                  errorMessage={
                    errors[`organizationName${experience.id}`]
                      ? errors[`organizationName${experience.id}`].message
                      : null
                  }
                />
                <SelectComponent
                  title={"Année de début"}
                  errorMessage={
                    errors[`startYear${experience.id}`]
                      ? errors[`startYear${experience.id}`].message
                      : null
                  }
                  error={errors[`startYear${experience.id}`] ? true : false}
                >
                  <Controller
                    render={(props) => {
                      return (
                        <Select
                          value={props.field.value}
                          onChange={props.field.onChange}
                          error={
                            errors
                              ? errors[`startYear${experience.id}`]
                                ? true
                                : false
                              : false
                          }
                        >
                          {years.map((year, index) => {
                            return (
                              <MenuItem key={index} value={year}>
                                {year}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      );
                    }}
                    name={`startYear${experience.id}`}
                    control={control}
                    rules={{ required: "*Please select start year" }}
                    defaultValue={experience.startYear}
                  />
                </SelectComponent>
                <SelectComponent
                  title={"Fin d'année"}
                  errorMessage={
                    errors[`endYear${experience.id}`]
                      ? errors[`endYear${experience.id}`].message
                      : null
                  }
                  error={errors[`endYear${experience.id}`] ? true : false}
                >
                  <Controller
                    render={(props) => (
                      <Select
                        value={props.field.value}
                        onChange={props.field.onChange}
                        error={
                          errors
                            ? errors[`endYear${experience.id}`]
                              ? true
                              : false
                            : false
                        }
                      >
                        {years.map((year, index) => {
                          return (
                            <MenuItem key={index} value={year}>
                              {year}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    )}
                    name={"endYear" + experience.id}
                    control={control}
                    rules={{ required: "*Please select end year" }}
                    defaultValue={experience.endYear}
                  />
                </SelectComponent>
              </div>
            </div>
          );
        })}
        {props.experiences.length === 4 ? null : (
          <div className="add-new-btn-cont">
            <Button
              style={{ color: "#007456" }}
              onClick={addNewExperience}
              variant="text"
            >
              Ajouter une nouveau
            </Button>
          </div>
        )}
        <Divider sx={{ margin: "10px 0px" }} />
        <BackNextBtnComponent
          onNext={handleNext}
          onBack={handleBack}
          loading={loading}
          tab={props.tab}
          nextTitle={"Suivant"}
          backTitle={"Retour"}
        />
      </form>
    </Paper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkExperienceComponent);

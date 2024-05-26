import { Button, Divider, MenuItem, Paper, Select } from "@mui/material";
import React, { useState } from "react";
import "../Styles/WorkExperienceComponent.css";
import { connect } from "react-redux";
import BackNextBtnComponent from "./BackNextBtnComponent";
import { addAllExperience } from "../Redux/actions";
import { useForm, Controller } from "react-hook-form";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";

const mapStateToProps = (state) => ({
  experiences: state.workExperienceReducer.experiences,
});

const mapDispatchToProps = (dispatch) => ({
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
    setLoading(true);

    const experiences = Object.entries(data).reduce((acc, [key, value]) => {
      const [field, id] = key.split("_");
      if (!acc[id]) {
        acc[id] = { id: parseInt(id) };
      }
      acc[id][field] = value;
      return acc;
    }, {});

    const experiencesArray = Object.values(experiences);

    props.setAllExperience(experiencesArray);

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  const addNewExperience = () => {
    const newId = props.experiences.length + 1;
    props.setAllExperience([
      ...props.experiences,
      {
        id: newId,
        jobTitle: "",
        organizationName: "",
        startYear: "",
        endYear: "",
      },
    ]);
  };

  return (
    <Paper className="work-experience-paper" elevation={3}>
      <h2 className="work-experience-heading">Work Experience</h2>
      <form onSubmit={handleSubmit(handleNext)}>
        {props.experiences.map((experience) => {
          return (
            <div key={experience.id} className="experience-cont">
              <h3 className="experience-heading">
                Experience {experience.id}
              </h3>
              <Divider sx={{ margin: "5px 0px" }} />
              <div className="experience-form-cont">
                <InputComponent
                  title={"Job Title"}
                  type={"text"}
                  name={`jobTitle_${experience.id}`}
                  register={register}
                  multiline={false}
                  defaultValue={experience.jobTitle}
                  error={Boolean(
                    errors[`jobTitle_${experience.id}`]
                  )}
                  errorMessage={
                    errors[`jobTitle_${experience.id}`]
                      ? errors[`jobTitle_${experience.id}`].message
                      : null
                  }
                />
                <InputComponent
                  title={"Organization Name"}
                  type={"text"}
                  name={`organizationName_${experience.id}`}
                  register={register}
                  multiline={false}
                  defaultValue={experience.organizationName}
                  error={Boolean(
                    errors[`organizationName_${experience.id}`]
                  )}
                  errorMessage={
                    errors[`organizationName_${experience.id}`]
                      ? errors[`organizationName_${experience.id}`].message
                      : null
                  }
                />
                <SelectComponent
                  title={"Start Year"}
                  errorMessage={
                    errors[`startYear_${experience.id}`]
                      ? errors[`startYear_${experience.id}`].message
                      : null
                  }
                  error={
                    errors[`startYear_${experience.id}`] ? true : false
                  }
                >
                  <Controller
                    render={(props) => {
                      return (
                        <Select
                          value={props.field.value}
                          onChange={props.field.onChange}
                          error={
                            errors
                              ? errors[`startYear_${experience.id}`]
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
                    name={`startYear_${experience.id}`}
                    control={control}
                    rules={{ required: "*Please select start year" }}
                    defaultValue={experience.startYear}
                  />
                </SelectComponent>
                <SelectComponent
                  title={"End Year"}
                  errorMessage={
                    errors[`endYear_${experience.id}`]
                      ? errors[`endYear_${experience.id}`].message
                      : null
                  }
                  error={errors[`endYear_${experience.id}`] ? true : false}
                >
                  <Controller
                    render={(props) => (
                      <Select
                        value={props.field.value}
                        onChange={props.field.onChange}
                        error={
                          errors
                            ? errors[`endYear_${experience.id}`]
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
                    name={`endYear_${experience.id}`}
                    control={control}
                    rules={{ required: "*Please select end year" }}
                    defaultValue={experience.endYear}
                  />
                </SelectComponent>
              </div>
            </div>
          );
        })}
        <div className="add-new-btn-cont">
          <Button
            style={{ color: "#007456" }}
            onClick={addNewExperience}
            variant="text"
          >
            Add New
          </Button>
        </div>
        <Divider sx={{ margin: "10px 0px" }} />
        <BackNextBtnComponent
          onNext={handleNext}
          onBack={handleBack}
          loading={loading}
          tab={props.tab}
          nextTitle={"Next"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperienceComponent);
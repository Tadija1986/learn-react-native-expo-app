import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import FlatButton from "../shared/button";

const initialValues = {
  title: "",
  rating: "",
  genre: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required().min(4),
  rating: Yup.string()
    .required()
    .test(
      "is_number_1_5",
      "Rating must be a number between 1 and 5",
      (value) => {
        return !isNaN(value) && parseInt(value) < 6 && parseInt(value) > 0;
      }
    ),
  genre: Yup.string().required().min(3),
});

export default function ReviewForm({ addReview }) {
  const formSubmit = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
    addReview(values);
  };
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={formSubmit}
      >
        {(formikProps) => {
          return (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="title"
                onChangeText={formikProps.handleChange("title")}
                value={formikProps.values.title}
                onBlur={formikProps.handleBlur("title")}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.title && formikProps.errors.title}
              </Text>
              <TextInput
                keyboardType="numeric"
                style={globalStyles.input}
                placeholder="rating [1-5]"
                onChangeText={formikProps.handleChange("rating")}
                value={formikProps.values.rating}
                onBlur={formikProps.handleBlur("rating")}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.rating && formikProps.errors.rating}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="genre"
                onChangeText={formikProps.handleChange("genre")}
                value={formikProps.values.genre}
                onBlur={formikProps.handleBlur("genre")}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.genre && formikProps.errors.genre}
              </Text>
              <FlatButton text="submmit" onPress={formikProps.handleSubmit} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

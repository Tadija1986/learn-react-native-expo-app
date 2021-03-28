import React from "react";
import { View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

const initialValues = {
  title: "",
  rating: "",
  genre: "",
};

export default function ReviewForm({ addReview }) {
  const formSubmit = (values, onSubmitProps) => {
    addReview(values);
    onSubmitProps.resetForm();
  };
  return (
    <View style={globalStyles.container}>
      <Formik initialValues={initialValues} onSubmit={formSubmit}>
        {(formikProps) => {
          return (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="title"
                onChangeText={formikProps.handleChange("title")}
                value={formikProps.values.title}
              />
              <TextInput
                keyboardType="numeric"
                style={globalStyles.input}
                placeholder="rating [1-5]"
                onChangeText={formikProps.handleChange("rating")}
                value={formikProps.values.rating}
              />
              <TextInput
                style={globalStyles.input}
                placeholder="genre"
                onChangeText={formikProps.handleChange("genre")}
                value={formikProps.values.genre}
              />
              <Button
                title="Submmit"
                color="maroon"
                onPress={formikProps.handleSubmit}
              />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

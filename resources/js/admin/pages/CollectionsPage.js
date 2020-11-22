import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classnames from "classnames";

const CategoriesPage = () => {
    return (
        <div className="p-4 pt-10">
            <Formik
                initialValues={{ name: "", description: "" }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = "Prašome nepalikti tuščio laukelio";
                    }
                    if (!values.description) {
                        errors.description =
                            "Prašome nepalikti tuščio laukelio";
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    const response = await axios.post(
                        "/api/collections",
                        values
                    );
                    setSubmitting(false);
                    console.log(response.data);
                }}
            >
                {({ isValid, errors, touched, isSubmitting }) => (
                    <Form>
                        <label className="block">
                            <span className="text-gray-700">Pavadinimas</span>
                            <Field
                                type="text"
                                name="name"
                                className={classnames(
                                    "form-input mt-1 block w-full",
                                    errors.name &&
                                        touched.name &&
                                        "border-red-700"
                                )}
                                placeholder="Kolekcijos pavadinimas"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-red-700"
                            />
                        </label>
                        <label className="block mt-3">
                            <span className="text-gray-700">Aprašymas</span>
                            <Field
                                type="textarea"
                                name="description"
                                className={classnames(
                                    "form-input mt-1 block w-full",
                                    errors.description &&
                                        touched.description &&
                                        "border-red-700"
                                )}
                            />
                            <ErrorMessage
                                name="description"
                                component="div"
                                className="text-red-700"
                            />
                        </label>

                        <button
                            disabled={isSubmitting || !isValid}
                            type="submit"
                            className={classnames(
                                "mt-3 py-2 px-4 text-white font-semibold rounded-lg shadow-md focus:outline-none",
                                isValid && "bg-indigo-500 hover:bg-indigo-400",
                                (isSubmitting || !isValid) && "bg-indigo-400"
                            )}
                        >
                            Išsaugoti
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CategoriesPage;

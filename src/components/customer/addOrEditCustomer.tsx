import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Dialog,
  DialogTitle,
} from "@mui/material";
import SimpleInput from "../input/simpleInput";
import { useFormik } from "formik";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  validationSchema,
  initialValues,
  CUSTOMER_INPUTS_VALUE,
  BILLING_INPUTS_VALUE,
  SHIPPING_INPUTS_VALUE,
} from "./customerUtils";

export interface AddOrEditCustomerModalProps {
  open: boolean;
  handleClose: () => void;
  customerId?: string;
}

const SectionAccordion = ({ title, children }: any) => (
  <Accordion sx={{ width: "100%" }}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${title.toLowerCase()}-content`}
      id={`${title.toLowerCase()}-header`}
    >
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ width: "100%", padding: 0 }}>
      {children}
    </AccordionDetails>
  </Accordion>
);

export default function AddOrEditCustomerModal({
  open,
  handleClose,
  customerId,
}: AddOrEditCustomerModalProps) {
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: async () => {
      // todo: add or edit user
      resetForm();
    },
  });

  const {
    errors,
    values,
    handleSubmit,
    isSubmitting,
    handleChange,
    resetForm,
  } = formik;

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        {customerId ? "Edit customer" : `Add new customer`}
      </DialogTitle>
      <Box sx={{ width: "100%", position: "relative", overflowX: "hidden" }}>
        {Object.entries(CUSTOMER_INPUTS_VALUE).map(([key, label], index) => (
          <SimpleInput
            key={index}
            label={label}
            name={key}
            value={values[key as keyof typeof values]}
            handleChange={handleChange}
          />
        ))}

        <SectionAccordion title={"Billing Adress"}>
          <>
            {Object.entries(BILLING_INPUTS_VALUE).map(([key, label], index) => (
              <SimpleInput
                key={index}
                label={label}
                name={key}
                value={values[key as keyof typeof values]}
                handleChange={handleChange}
              />
            ))}
          </>
        </SectionAccordion>

        <SectionAccordion title={"Shipping Adress"}>
          <>
            {Object.entries(SHIPPING_INPUTS_VALUE).map(
              ([key, label], index) => (
                <SimpleInput
                  key={index}
                  label={label}
                  name={key}
                  value={values[key as keyof typeof values]}
                  handleChange={handleChange}
                />
              )
            )}
          </>
        </SectionAccordion>

        <SectionAccordion title={"Meta Data"}>
          <Button>Add</Button>
        </SectionAccordion>
        <Box
          sx={{
            display: "flex",
            position: "sticky",
            bottom: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <Button
            sx={{
              width: "50%",
              backgroundColor: "primary.light",
              color: "primary.main",
            }}
            variant="contained"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{ width: "50%" }}
            variant="contained"
            disabled={isSubmitting || !errors}
            onClick={() => handleSubmit()}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

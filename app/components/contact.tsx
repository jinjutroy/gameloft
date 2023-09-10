import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  buttonClasses,
  outlinedInputClasses,
  svgIconClasses,
} from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { useFormik } from "formik";
import Image from "next/image";
import * as yup from "yup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AnimationComponent from "./animation-component";

type FormControl = {
  name: string;
  email: string;
  country: number | undefined;
  platform: number | undefined;
  policy: boolean;
  service: boolean;
};

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      primary: string;
    };
  }

  interface ThemeOptions {
    status?: {
      primary?: string;
    };
  }
}

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.primary,
  "&.Mui-checked": {
    color: theme.status.primary,
  },
}));

const theme = (color: string) =>
  createTheme({
    status: {
      primary: color,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            width: "100px",
            margin: "0 auto",
            borderWidth: 3,
            borderColor: color,
            color: color,
            backgroundColor: "transparent",
            "&:hover": {
              borderWidth: 3,
              borderColor: color,
              backgroundColor: "transparent",
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            alignItems: "start",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: color,
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            [`&.Mui-error .${svgIconClasses.root}`]: {
              fill: "red",
            },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fill: color,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: color,
            borderWidth: 3,
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: color,
              borderWidth: 3,
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: color,
              borderWidth: 3,
            },
          },
        },
      },
    },
  });

const initialValues: FormControl = {
  name: "",
  email: "",
  country: undefined,
  platform: undefined,
  policy: false,
  service: false,
};

const ContactComponent = () => {
  const validationSchema = yup.object({
    name: yup.string().trim().required("Enter your name"),
    email: yup
      .string()
      .trim()
      .email("Email invalidate")
      .required("Enter your email"),
    country: yup.number().required("Choose your country"),
    platform: yup.number().required("Choose your platform"),
    policy: yup.boolean().oneOf([true]),
    service: yup.boolean().oneOf([true]),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: FormControl) => {
      console.log(
        "🚀 ~ file: contact.tsx:24 ~ ContactComponent ~ values:",
        values
      ); 
      // DOMPurify.sanitize(values.name)
    },
  });
  const isNameErr = formik.touched.name && Boolean(formik.errors.name);
  const isEmailErr = formik.touched.email && Boolean(formik.errors.email);
  const isCountryErr = formik.touched.country && Boolean(formik.errors.country);
  const isPlatformErr =
    formik.touched.platform && Boolean(formik.errors.platform);
  return (
    <section className="sm:min-h-screen bg-subcolor-001 py-10">
      <div className="container mx-auto sm:flex justify-between py-4 items-center h-full">
        <AnimationComponent className="hidden sm:block">
          <Image
            className="text-center"
            width={404}
            height={426}
            src={"/assets/images/minion.png"}
            alt="Minion"
          />
        </AnimationComponent>
        <AnimationComponent className="mx-auto text-primary max-w-[350px]">
          <div className="mb-8">
            <p className="text-[25px] font-bold">Stay in the Know!</p>
            <p>Don&apos;t get left behind!</p>
            <p>Subscribe to our newsletters today!</p>
          </div>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 ">
            <ThemeProvider theme={theme("#2699FB")}>
              <FormControl>
                <InputLabel
                  size="small"
                  htmlFor="my-input-name"
                  error={isNameErr}
                >
                  Name
                </InputLabel>
                <OutlinedInput
                  name="name"
                  size="small"
                  label="Name"
                  onChange={formik.handleChange}
                  id="my-input-name"
                  aria-describedby="name"
                  value={formik.values.name}
                  error={isNameErr}
                />
                <FormHelperText id="name" error={isNameErr}>
                  {isNameErr && formik.errors.name}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <InputLabel
                  error={isEmailErr}
                  size="small"
                  htmlFor="my-input-small"
                >
                  Email
                </InputLabel>
                <OutlinedInput
                  name="email"
                  size="small"
                  label="Email"
                  onChange={formik.handleChange}
                  id="my-input-email"
                  aria-describedby="email"
                  value={formik.values.email}
                  error={isEmailErr}
                />
                <FormHelperText id="email" error={isEmailErr}>
                  {isEmailErr && formik.errors.email}
                </FormHelperText>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel
                  error={isCountryErr}
                  size="small"
                  id="select-label-country"
                >
                  Country
                </InputLabel>
                <Select
                  labelId="select-label-country"
                  id="select-country"
                  label="Country"
                  name="country"
                  value={formik.values.country}
                  size="small"
                  onChange={formik.handleChange}
                  error={isCountryErr}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText id="country" error={isCountryErr}>
                  {isCountryErr && formik.errors.country}
                </FormHelperText>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel
                  error={isPlatformErr}
                  size="small"
                  id="select-label"
                >
                  Platform
                </InputLabel>
                <Select
                  labelId="select-label-platform"
                  id="select-platform"
                  label="Platform"
                  name="platform"
                  size="small"
                  value={formik.values.platform}
                  onChange={formik.handleChange}
                  error={isPlatformErr}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText id="country" error={isPlatformErr}>
                  {isPlatformErr && formik.errors.platform}
                </FormHelperText>
              </FormControl>
              <FormControlLabel
                className="text-[10px] sm:text-[14px]"
                name="policy"
                checked={formik.values.policy}
                onChange={formik.handleChange}
                label="By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy."
                control={<CustomCheckbox color="primary" />}
              />
              <FormControlLabel
                className="text-[10px] sm:text-[14px]"
                name="service"
                checked={formik.values.service}
                onChange={formik.handleChange}
                label="I agree to receive promotional offers relating to all Gameloft games and services."
                control={<CustomCheckbox color="primary" />}
              />
              <Button size="medium" variant="outlined" type="submit">
                Submit
              </Button>
            </ThemeProvider>
          </form>
        </AnimationComponent>
      </div>
    </section>
  );
};

export default ContactComponent;

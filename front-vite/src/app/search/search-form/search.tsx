import { useForm } from "react-hook-form";
import { type SchemaType, schema } from "./search-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { placeholder } from "@/models/search/placeholder";

import LogoFace from "@/assets/img/Logo-face.png";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import style from "./search.module.css";

export default function SearchForm() {
  const navigate = useNavigate();
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  function onSubmit(value: SchemaType) {
    const encodedURI = encodeURIComponent(value.searchScammer);
    navigate(`/search/find/${encodedURI}`);
  }

  return (
    <>
      <Helmet>
        <title>Search :: SScammer</title>
      </Helmet>
      <img src={LogoFace} alt="logo-img" className={style.logo} />
      <p className={style.description}>*Please Enter it without '-'</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={style.formContent}
        >
          <FormField
            control={form.control}
            name="searchScammer"
            defaultValue=""
            render={({ field }) => {
              return (
                <div className={style.formFieldWrapper}>
                  <FormItem className={style.formItem}>
                    <FormControl>
                      <div className={style.inputButtonWrapper}>
                        <Input
                          {...field}
                          placeholder={placeholder}
                          className={style.inputContent}
                        />
                        <Button type={"submit"} className={style.buttonContent}>
                          <Search className={"w-10 h-10"} />
                        </Button>
                      </div>
                    </FormControl>
                  </FormItem>
                  <FormMessage className={"lg:text-2xl text-lg"} />
                </div>
              );
            }}
          />
        </form>
      </Form>
    </>
  );
}

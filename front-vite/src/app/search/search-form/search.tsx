import { useForm } from "react-hook-form";
import { type SchemaType, schema } from "./search-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  function onSubmit(value: SchemaType) {
    console.log(value);
  }

  return (
    <>
      <img src={LogoFace} alt="logo-img" className={style.logo} />
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
                          placeholder={"Bank account OR Mobile number"}
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
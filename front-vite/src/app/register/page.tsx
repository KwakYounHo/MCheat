// package
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type SchemaType } from "@/app/register/register-form-schema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// utils
import database from "@/utils/supabase/client";

// ui
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

import style from "./register.module.css";

export default function Register() {
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });
  const [isPending, setIsPending] = useState<boolean>(false);
  const navigate = useNavigate();

  async function onSubmit(value: SchemaType) {
    setIsPending(true);
    const keys = Object.keys(value) as (keyof SchemaType)[];
    keys.forEach((e) => {
      if (e === "bank_account" || e === "mobile_number" || e === "detail") {
        if (value[e] === "") {
          value[e] = undefined;
        }
      }
    });

    const DB = database();
    const { name, bank_account, mobile_number, place_of_issue_occur, detail } =
      value;
    const { error } = await DB.from("scammer").insert({
      name,
      bank_account,
      mobile_number,
      place_of_issue_occur,
      detail,
    });

    if (error) {
      setIsPending(false);
      console.error(error);
      return;
    }

    setIsPending(false);

    navigate(`/find/${name}`);
  }

  return (
    <>
      <Helmet>
        <title>Register :: SScammer</title>
      </Helmet>
      <p className={style.title}>Register Scammer</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={style.formWrapper}
        >
          <FormField
            control={form.control}
            defaultValue=""
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>
                    name <strong>*</strong>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="ex) JUNO" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Card>
            <CardHeader>
              <CardTitle>
                Details information <strong>*</strong>
              </CardTitle>
              <CardDescription>
                You must enter at least one field
              </CardDescription>
            </CardHeader>
            <CardContent className={"grid grid-cols-2 gap-2"}>
              <FormField
                control={form.control}
                defaultValue=""
                name="mobile_number"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>mobile number</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="ex) 01234567891" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                defaultValue=""
                name="bank_account"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>bank account</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="ex) 01234567891" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </CardContent>
          </Card>
          <FormField
            control={form.control}
            defaultValue=""
            name="place_of_issue_occur"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={"!normal-case"}>
                    Place of issue occur <strong>*</strong>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="ex) Facebook, Offline, Website title, etc..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            defaultValue=""
            name="detail"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>detail</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className={"min-h-52"}
                      placeholder="When and how were you scammed?"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className={style.buttonWrapper}>
            <Button type={"submit"}>submit</Button>
          </div>
        </form>
      </Form>
    </>
  );
}

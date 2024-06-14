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
import {
  Search,
  MessageCircleQuestionIcon,
  MessageCircleWarningIcon,
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import style from "./search.module.css";

export default function SearchPage() {
  const navigate = useNavigate();
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  function onSubmit(value: SchemaType) {
    const encodedURI = encodeURIComponent(value.searchScammer);
    navigate(`/find/${encodedURI}`);
  }

  return (
    <>
      <Helmet>
        <title>Search :: SScammer</title>
      </Helmet>
      <div className={style.searchPageWrapper}>
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
                          <Button
                            type={"submit"}
                            className={style.buttonContent}
                          >
                            <Search className={"w-10 h-10"} />
                          </Button>
                        </div>
                      </FormControl>
                    </FormItem>
                    <FormMessage className={"text-lg"} />
                  </div>
                );
              }}
            />
          </form>
        </Form>
        <Accordion type="single" collapsible className={style.accordionWrapper}>
          <AccordionItem value="help">
            <AccordionTrigger>
              <div>
                <MessageCircleQuestionIcon />
                Help
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Alert className={style.alertWrapper}>
                <Search />
                <div>
                  <AlertTitle>Search keyword</AlertTitle>
                  <AlertDescription>
                    You can search using one of the following keywords: “mobile
                    number” or “account number” or “name”
                  </AlertDescription>
                </div>
                <div>
                  <AlertTitle>Without hyphen</AlertTitle>
                  <AlertDescription>
                    Please enter the keyword without a hyphen('-')
                  </AlertDescription>
                </div>
              </Alert>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="warning">
            <AccordionTrigger>
              <div>
                <MessageCircleWarningIcon />
                Warning
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <Alert className={style.alertWrapper}>
                  <MessageCircleWarningIcon />
                  <AlertTitle>Verification is required</AlertTitle>
                  <AlertDescription>
                    All scam reports are user-generated on this website.
                    Verification may be required, and search results should be
                    used for reference only.
                  </AlertDescription>
                </Alert>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

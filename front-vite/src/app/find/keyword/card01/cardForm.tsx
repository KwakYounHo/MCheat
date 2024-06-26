// package
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SchemaType, schema } from "@/app/search/main/search-form-schema";
import { useNavigate } from "react-router-dom";

// model
import { placeholder } from "@/models/search/placeholder";

// ui
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export default function CardForm({ className = "" }: { className: string }) {
  const navigate = useNavigate();
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  function onSubmit(value: SchemaType) {
    const encodedURI = encodeURIComponent(value.searchScammer);
    form.reset({
      searchScammer: "",
    });
    navigate(`/find/${encodedURI}`);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <FormField
          control={form.control}
          name="searchScammer"
          defaultValue=""
          render={({ field }) => {
            return (
              <>
                <FormItem>
                  <FormLabel>Research</FormLabel>
                  <p className={"text-muted-foreground text-sm"}>
                    Plase Enter it without '-'
                  </p>
                  <FormControl>
                    <div className={"w-full grid grid-cols-[1fr_55px] gap-4"}>
                      <Input {...field} placeholder={placeholder} />
                      <Button type="submit">
                        <Search className={"w-[25px] h-[25px]"} />
                      </Button>
                    </div>
                  </FormControl>
                </FormItem>
                <FormMessage className={"p-1 pl-2"} />
              </>
            );
          }}
        ></FormField>
      </form>
    </Form>
  );
}

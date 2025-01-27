import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    //   const buffer = Buffer.from(await image.arrayBuffer());
  const relativeUploadDir = `/uploads/${new Date(Date.now())
    .toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-")}`;

  const uploadDir = join(process.cwd(), "public", relativeUploadDir);
       try {
            await stat(uploadDir);
          } catch (e: any) {
            if (e.code === "ENOENT") {
              // This is for checking the directory is exist (ENOENT : Error No Entry)
              await mkdir(uploadDir, { recursive: true });
            } else {
              console.error(
                "Error while trying to create directory when uploading a file\n",
                e
              );
              return NextResponse.json(
                { error: "Something went wrong." },
                { status: 500 }
              );
            }
          }

            try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${data.username.replace(
      /\.[^/.]+$/,
      ""
    )}-${uniqueSuffix}.${mime.getExtension(image.type)}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    const fileUrl = `${relativeUploadDir}/${filename}`;
    return NextResponse.json({ user: result });
} catch (e) {
  console.error("Error while trying to upload a file\n", e);
  return NextResponse.json(
    { error: "Something went wrong." },
    { status: 500 }
  );
}


    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {/* {JSON.stringify(data, null, 2)} */}
            {data.username}

          </code>
        </pre>
      ),
    })
  }
//   const fileInput = document.getElementById("fileInput"); // Replace with your HTML element ID
//   const file = fileInput.files[0];
  
//   const formData = new FormData();
//   formData.append("file", file);
  
//   fetch("/api/upload", {
//     method: "POST",
//     body: formData,
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" type="file" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

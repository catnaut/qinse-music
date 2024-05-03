import { LoginForm } from "@/components/form/login";

export default function Page() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="hidden w-1/2  h-full bg-muted lg:block" >
        {/* 块底部描述 */}
        <div className="absolute bottom-8 left-8">
          <p className="text-lg text-muted-foreground">块底部描述</p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <div className="p-8 w-full max-w-md  flex flex-col justify-center items-center ">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

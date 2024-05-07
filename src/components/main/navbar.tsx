"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SearchSchema, SearchSchemaType } from "@/definitions/search";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";

export function Search() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<SearchSchemaType>({
    resolver: zodResolver(SearchSchema),
  });

  const onSearch = (data: SearchSchemaType) => {
    if (data.keywords === "") {
      router.push(`/search`);
    } else if (data.type === "mixed") {
      router.push(`/search?key=${data.keywords}`);
    } else {
      // TODO: 在下拉菜单中选择搜索类型
      router.push(`/search/type=${data.type}?key=${data.keywords}`);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSearch)}>
        <Input  {...register("keywords")} className="h-6" />
      </form>
    </>
  );
}

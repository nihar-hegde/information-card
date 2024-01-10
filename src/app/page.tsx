import IdCard from "@/components/IdCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <IdCard
        title="Nihar Hegde"
        description="Hello I'm a Full stack web developer."
        interests={[
          "Web Development",
          "NextJS",
          "ReactJS",
          "JavaScript",
          "TypeScript",
          "C++",
        ]}
      />
    </main>
  );
}

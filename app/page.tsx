import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="p-6 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Sanctum Core</h1>
        <p className="text-lg mt-2 max-w-2xl mx-auto">
          A next-generation underground luxury sanctuary — secure, serene, and self-sufficient.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold">Project Overview</h2>
            <p>
              Sanctum Core is a revolutionary underground sanctuary designed for those who seek peace of mind and premium comfort during uncertain times. It combines high-end design, self-sustainability, and robust security.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold">Funding Goal</h2>
            <p>
              We aim to raise $11.5M to construct our first prototype facility in Dubai — a proof-of-concept model showcasing advanced architecture, private suites, hydroponic labs, medical bays, and more.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Reward Tiers</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>$25</strong> — Digital Vault Tour</li>
          <li><strong>$100</strong> — Collector PDF & Name Wall</li>
          <li><strong>$500</strong> — VIP Concept Pack</li>
          <li><strong>$5,000</strong> — Founders Pass</li>
          <li><strong>$25,000</strong> — Reservation Priority</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Timeline</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Q3 2025 — Final architectural design</li>
          <li>Q4 2025 — Break ground in Dubai</li>
          <li>Q2 2026 — Shell completion</li>
          <li>Q4 2026 — Interior fit-out and testing</li>
          <li>Q1 2027 — Vault opens</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Core Sectors & Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { src: "/vault-entrance.jpg", label: "Vault Entrance" },
            { src: "/lobby.jpg", label: "Grand Lobby" },
            { src: "/suite.jpg", label: "Private Luxury Suite" },
            { src: "/hydroponics.jpg", label: "Hydroponics Farm" },
            { src: "/medical.jpg", label: "Medical Bay" },
            { src: "/ai-core.jpg", label: "AI Control Room" },
            { src: "/spa.jpg", label: "Wellness Spa" },
            { src: "/dining.jpg", label: "Dining Hall" },
            { src: "/pool.jpg", label: "Aquatic Wellness Zone" },
            { src: "/childrens-room.jpg", label: "Children’s Room" },
            { src: "/teen-gameroom.jpg", label: "Teen & Creative Game Room" },
            { src: "/data-vault.jpg", label: "Data Vault / Server Room" }
          ].map(({ src, label }) => (
            <div key={src} className="text-center">
              <img src={src} alt={label} className="rounded-xl mb-2" />
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <Button className="mt-6 text-xl px-8 py-4">Join the Sanctum Movement</Button>
      </section>
    </div>
  );
}

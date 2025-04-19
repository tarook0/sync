import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"
import { Card, CardContent } from "./card"

export function SystemRequirements() {
  return (
    <Tabs defaultValue="minimum" className="w-full max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="minimum">Minimum Requirements</TabsTrigger>
        <TabsTrigger value="recommended">Recommended Requirements</TabsTrigger>
      </TabsList>
      <TabsContent value="minimum">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400">OS</h4>
                  <p className="text-white">Windows 10 64-bit</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Processor</h4>
                  <p className="text-white">Intel Core i5-6600K / AMD Ryzen 3 1300X</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Memory</h4>
                  <p className="text-white">2 GB RAM</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Graphics</h4>
                  <p className="text-white">NVIDIA GTX 1050 / AMD RX 560 (4 GB VRAM)</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Storage</h4>
                  <p className="text-white">50 GB available space (SSD recommended)</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Network</h4>
                  <p className="text-white">No Internet? No Problem</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="recommended">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400">OS</h4>
                  <p className="text-white">Windows 10/11 64-bit</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Processor</h4>
                  <p className="text-white">Intel Core i7-8700K / AMD Ryzen 5 3600X</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Memory</h4>
                  <p className="text-white">16 GB RAM</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Graphics</h4>
                  <p className="text-white">NVIDIA RTX 2060 / AMD RX 5700 (8 GB VRAM)</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Storage</h4>
                  <p className="text-white">50 GB available space (SSD required)</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Network</h4>
                  <p className="text-white">No Internet? No Problem</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

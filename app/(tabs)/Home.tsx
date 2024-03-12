import { Activity, Airplay } from '@tamagui/lucide-icons';
import { Button, H2, H4, Input, Separator, Theme, YStack } from 'tamagui';

export default function TabOneScreen() {
  return (
    <YStack flex={1} alignItems="center" justifyContent="center">
      <H2>Hi {'{name}'}</H2>
      <Separator />
      <H4>On average your weight is 173.3 lbs</H4>
      <Separator />

      <Input w={'80%'} />
      <Button alignSelf="center" icon={Airplay} size="$6">
        Weight In!
      </Button>
    </YStack>
  );
}

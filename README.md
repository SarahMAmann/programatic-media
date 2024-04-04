A multimedia project generated fully with code using Remotion, Fotor, and Sonic Pi. 

<img src="/public/cover.png" alt="cover image of skull on black static background">

Sonic Pi code used to generate the audio:
```live_loop :guit do
  with_fx :echo, mix: 0.3, phase: 0.23, amp: 0.5 do
    sample :guit_em9, rate: 1
  end
  sleep 4
end

play chord(:E3, :minor)
play chord(:G3, :major)

with_fx :reverb do |r|
  play 50
  sleep 0.5
  control r, mix: 0.7
  play 55
  sleep 1
  control r, mix: 0.9
  sleep 1
  play 62
end

live_loop :boom do
  with_fx :reverb, room: 1 do
    play chord(:A3, :minor), pitch:-12
  end
  sleep 4
end


with_fx :echo, phase: 0.5 do
  play 50
  sleep 0.5
  sample :elec_plip
  sleep 0.5
  play 62
end

sample :ambi_lunar_land, amp: 0.1
sleep 1
play 48
sleep 0.5
play 36
sample :ambi_drone, amp: 1
sleep 1
play 36
```

## Commands To Run:

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm start
```

**Render video**

```console
npm run build
```

**Upgrade Remotion**

```console
npm run upgrade
```

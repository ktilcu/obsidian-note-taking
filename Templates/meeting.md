<%*

const today = tp.date.now("YYYY.MM.DD")
const time = tp.date.now("HH:MM")

const meetingType = await tp.system.suggester(["Normal", "1:1"], ['Normal', '1:1'], false, "What kind of meeting is it?")

console.log(meetingType)

if (meetingType == '1:1') {
  const who = await tp.system.prompt("Who are you meeting with?", '', true, false)
  const shortName = who.split(' ')[0]
  const fileName = `${today} - ${shortName} & Kyle`
  const displayName = `${time} - ${shortName}`
  tp.file.create_new(
	  tp.file.find_tfile("new-1-1"), 
	  fileName,
	  true,
	  app.vault.getAbstractFileByPath("Meetings")
  )
  tR += `#### ${displayName} & Kyle \n ![[Meetings/${fileName}#Action Items]]`
} else {
  const topic = await tp.system.prompt("What is the topic", '', true, false)
  const noteName = `${today} - ${topic}`
  tR += `#### ${time} - ${topic}\n ![[${noteName}#Summary]]`
  tp.file.create_new(tp.file.find_tfile("new meeting"), noteName, true, app.vault.getAbstractFileByPath("Meetings"))
}

%>

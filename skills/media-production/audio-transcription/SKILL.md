---
name: audio-transcription
description: Transcribe supplied audio or video into a faithful, reviewable transcript with timestamps, speaker labels, uncertainty markers, and privacy-aware handling. Use when the transcript itself is the deliverable; do not use to summarize meetings, infer action items, translate content, imitate voices, or upload recordings without authorization.
metadata:
  version: "0.7.0"
---

# Audio Transcription

Confirm the media files, language or likely languages, desired output format, timestamp granularity, speaker-label needs, domain vocabulary, and privacy constraints. Keep the source immutable and report unreadable, truncated, or unsupported inputs before processing.

Choose an available local or approved transcription provider according to accuracy, privacy, cost, duration, and diarization needs. External upload or paid processing requires explicit authorization. Never expose credentials in commands, logs, or artifacts. Split long media at quiet boundaries with overlap so words are not lost.

Preserve what was said rather than polishing meaning. Mark uncertain spans, inaudible sections, overlapping speech, and inferred speaker identities; do not invent missing words. Normalize punctuation and obvious fillers only when requested, and keep a verbatim option. Retain timestamps that let a reviewer return to the source.

Verify duration coverage, segment order, timestamp monotonicity, names and numbers, speaker consistency, and several samples against the recording. Return the transcript, source and processing scope, conventions, uncertainty list, coverage gaps, and tool or model used when relevant.

This Skill stops at transcription. Meeting decisions and actions belong to `meeting-to-actions`; translation, summarization, redaction, publishing, and source deletion require separate instructions.

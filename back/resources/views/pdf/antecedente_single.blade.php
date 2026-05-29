<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Antecedente — {{ $student->name }}</title>
    <style>
        * { font-family: Arial, sans-serif; margin: 0; padding: 0; box-sizing: border-box; }
        body { font-size: 11px; color: #1a1a2e; background: #fff; padding: 28px 32px; }

        .header {
            display: table;
            width: 100%;
            border-bottom: 3px solid #0b1a38;
            padding-bottom: 10px;
            margin-bottom: 16px;
        }
        .header-left  { display: table-cell; vertical-align: middle; width: 65%; }
        .header-right { display: table-cell; vertical-align: middle; text-align: right; width: 35%; }
        .doc-title    { font-size: 16px; font-weight: 800; color: #0b1a38; text-transform: uppercase; letter-spacing: 0.04em; }
        .doc-subtitle { font-size: 10px; color: #4a5568; margin-top: 2px; }
        .colegio-name { font-size: 11px; font-weight: 700; color: #0b1a38; }
        .colegio-meta { font-size: 9px; color: #718096; margin-top: 1px; }

        .student-card {
            background: #f0f4ff;
            border: 1px solid #c3d1f5;
            border-left: 4px solid #0b5ea8;
            border-radius: 4px;
            padding: 10px 14px;
            margin-bottom: 16px;
        }
        .student-card-title { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #0b5ea8; margin-bottom: 6px; }
        .fields-grid { display: table; width: 100%; }
        .field-row   { display: table-row; }
        .field-cell  { display: table-cell; padding: 2px 8px 2px 0; width: 25%; vertical-align: top; }
        .field-label { font-size: 8px; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .field-value { font-size: 11px; color: #1a202c; margin-top: 1px; }

        .record-box {
            border: 1px solid #c3d1f5;
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 16px;
        }
        .record-header {
            background: #0b1a38;
            color: #fff;
            padding: 8px 14px;
            display: table;
            width: 100%;
        }
        .record-header-left  { display: table-cell; font-size: 11px; font-weight: 700; }
        .record-header-right { display: table-cell; text-align: right; font-size: 10px; color: #a0c4ff; }

        .record-meta {
            background: #f7f9ff;
            padding: 7px 14px;
            display: table;
            width: 100%;
            border-bottom: 1px solid #e2e8f0;
        }
        .meta-cell { display: table-cell; width: 33%; }
        .meta-label { font-size: 8px; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .meta-value { font-size: 10.5px; color: #2d3748; margin-top: 1px; }

        .record-body {
            padding: 14px;
            line-height: 1.6;
            font-size: 11.5px;
            color: #1a202c;
            min-height: 120px;
        }

        .footer {
            margin-top: 32px;
            padding-top: 10px;
            border-top: 1px solid #cbd5e0;
            display: table;
            width: 100%;
        }
        .footer-left  { display: table-cell; font-size: 8.5px; color: #a0aec0; vertical-align: bottom; }
        .footer-right { display: table-cell; text-align: right; font-size: 8.5px; color: #a0aec0; vertical-align: bottom; }

        .signatures { display: table; width: 100%; margin-top: 60px; }
        .sig-cell   { display: table-cell; text-align: center; width: 50%; padding: 0 20px; }
        .sig-line   { border-top: 1px solid #2d3748; margin-bottom: 6px; }
        .sig-label  { font-size: 9.5px; color: #4a5568; }
        .sig-name   { font-size: 10px; font-weight: 700; color: #1a202c; margin-top: 2px; }
    </style>
</head>
<body>

    {{-- Header --}}
    <div class="header">
        <div class="header-left">
            <div class="doc-title">Registro Anecdótico</div>
            <div class="doc-subtitle">Antecedente individual del o la estudiante — Sistema TEA</div>
        </div>
        <div class="header-right">
            @if($student->colegio)
                <div class="colegio-name">{{ $student->colegio->nombre }}</div>
                <div class="colegio-meta">{{ $student->colegio->direccion }}</div>
                <div class="colegio-meta">{{ $student->colegio->email }}</div>
            @endif
        </div>
    </div>

    {{-- Ficha estudiante --}}
    <div class="student-card">
        <div class="student-card-title">Datos del o la estudiante</div>
        <div class="fields-grid">
            <div class="field-row">
                <div class="field-cell">
                    <div class="field-label">RUT</div>
                    <div class="field-value">{{ $student->rut }}</div>
                </div>
                <div class="field-cell" style="width:38%">
                    <div class="field-label">Nombre Completo</div>
                    <div class="field-value" style="font-weight:700">{{ $student->name }}</div>
                </div>
                <div class="field-cell">
                    <div class="field-label">Curso</div>
                    <div class="field-value">{{ $student->course }} — {{ $student->year }}</div>
                </div>
                <div class="field-cell">
                    <div class="field-label">Tutor/a</div>
                    <div class="field-value">{{ $student->tutorName }}</div>
                </div>
            </div>
        </div>
    </div>

    {{-- Registro --}}
    <div class="record-box">
        <div class="record-header">
            <div class="record-header-left">Detalle del registro</div>
            <div class="record-header-right">#{{ $history->id }}</div>
        </div>
        <div class="record-meta">
            <div class="meta-cell">
                <div class="meta-label">Fecha de ocurrencia</div>
                <div class="meta-value">{{ \Carbon\Carbon::parse($history->created_at)->format('d/m/Y H:i') }}</div>
            </div>
            <div class="meta-cell">
                <div class="meta-label">Registrado por</div>
                <div class="meta-value">{{ $history->user?->name ?? '—' }}</div>
            </div>
            <div class="meta-cell">
                <div class="meta-label">Establecimiento</div>
                <div class="meta-value">{{ $student->colegio?->nombre ?? '—' }}</div>
            </div>
        </div>
        <div class="record-body">{{ $history->description }}</div>
    </div>

    {{-- Firmas --}}
    <div class="signatures">
        <div class="sig-cell">
            <div class="sig-line"></div>
            <div class="sig-label">Firma del apoderado/a</div>
            <div class="sig-name">{{ $student->tutorName }}</div>
        </div>
        <div class="sig-cell">
            <div class="sig-line"></div>
            <div class="sig-label">Firma y timbre del establecimiento</div>
            <div class="sig-name">{{ $student->colegio?->nombre ?? '' }}</div>
        </div>
    </div>

    {{-- Footer --}}
    <div class="footer">
        <div class="footer-left">Sistema TEA &nbsp;·&nbsp; Generado el {{ \Carbon\Carbon::now()->format('d/m/Y H:i') }}</div>
        <div class="footer-right">Documento de uso interno — Confidencial</div>
    </div>

</body>
</html>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Documentos — {{ $student->name }}</title>
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
        .header-left  { display: table-cell; vertical-align: middle; width: 70%; }
        .header-right { display: table-cell; vertical-align: middle; text-align: right; width: 30%; }

        .doc-title {
            font-size: 17px;
            font-weight: 800;
            color: #0b1a38;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }
        .doc-subtitle { font-size: 11px; color: #4a5568; margin-top: 2px; }
        .colegio-name { font-size: 12px; font-weight: 700; color: #0b1a38; }
        .colegio-meta { font-size: 9px; color: #718096; margin-top: 2px; }

        .student-card {
            background: #f0f4ff;
            border: 1px solid #c3d1f5;
            border-left: 4px solid #0b5ea8;
            border-radius: 4px;
            padding: 12px 14px;
            margin-bottom: 16px;
        }
        .student-card-title {
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: #0b5ea8;
            margin-bottom: 8px;
        }
        .fields-grid { display: table; width: 100%; border-collapse: collapse; }
        .field-row   { display: table-row; }
        .field-cell  { display: table-cell; padding: 2px 8px 2px 0; width: 25%; vertical-align: top; }
        .field-label { font-size: 8.5px; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .field-value { font-size: 11px; color: #1a202c; margin-top: 1px; }

        .document-block { margin-bottom: 20px; }
        .document-block + .document-block { page-break-before: always; }

        .document-header {
            background: #0b1a38;
            color: #fff;
            padding: 6px 12px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.05em;
            border-radius: 3px;
            margin-bottom: 6px;
        }
        .document-meta {
            font-size: 9px;
            color: #718096;
            margin-bottom: 10px;
        }
        .document-content { font-size: 11px; }

        .no-records {
            text-align: center;
            padding: 24px;
            color: #a0aec0;
            font-style: italic;
            background: #fafafa;
            border: 1px solid #e2e8f0;
        }

        .footer {
            margin-top: 28px;
            padding-top: 10px;
            border-top: 1px solid #cbd5e0;
            display: table;
            width: 100%;
        }
        .footer-left  { display: table-cell; font-size: 8.5px; color: #a0aec0; vertical-align: bottom; }
        .footer-right { display: table-cell; text-align: right; font-size: 8.5px; color: #a0aec0; vertical-align: bottom; }
    </style>
</head>
<body>

    <div class="header">
        <div class="header-left">
            <div class="doc-title">Documentos del Estudiante</div>
            <div class="doc-subtitle">Registro completo de documentos — Sistema TEA</div>
        </div>
        <div class="header-right">
            @if($student->colegio)
                <div class="colegio-name">{{ $student->colegio->nombre }}</div>
                <div class="colegio-meta">{{ $student->colegio->direccion }}</div>
                <div class="colegio-meta">{{ $student->colegio->email }}</div>
            @endif
        </div>
    </div>

    <div class="student-card">
        <div class="student-card-title">Datos del o la estudiante</div>
        <div class="fields-grid">
            <div class="field-row">
                <div class="field-cell">
                    <div class="field-label">RUT</div>
                    <div class="field-value">{{ $student->rut }}</div>
                </div>
                <div class="field-cell" style="width:40%">
                    <div class="field-label">Nombre Completo</div>
                    <div class="field-value" style="font-weight:700">{{ $student->name }}</div>
                </div>
                <div class="field-cell">
                    <div class="field-label">Curso</div>
                    <div class="field-value">{{ $student->course }}</div>
                </div>
                <div class="field-cell">
                    <div class="field-label">Año</div>
                    <div class="field-value">{{ $student->year }}</div>
                </div>
            </div>
            <div class="field-row" style="margin-top:6px">
                <div class="field-cell">
                    <div class="field-label">RUT Tutor/a</div>
                    <div class="field-value">{{ $student->tutorRut }}</div>
                </div>
                <div class="field-cell" style="width:40%">
                    <div class="field-label">Nombre Tutor/a</div>
                    <div class="field-value">{{ $student->tutorName }}</div>
                </div>
                <div class="field-cell">
                    <div class="field-label">Teléfono</div>
                    <div class="field-value">{{ $student->phone }}</div>
                </div>
                <div class="field-cell">
                    <div class="field-label">Total documentos</div>
                    <div class="field-value">{{ count($documents) }}</div>
                </div>
            </div>
        </div>
    </div>

    @if(count($documents) > 0)
        @foreach($documents as $document)
            <div class="document-block">
                <div class="document-header">{{ $document->description }}</div>
                <div class="document-meta">
                    Fecha: {{ \Carbon\Carbon::parse($document->date)->format('d/m/Y H:i') }}
                    &nbsp;·&nbsp;
                    Registrado por: {{ $document->user?->name ?? '—' }}
                </div>
                <div class="document-content">
                    {!! $document->html !!}
                </div>
            </div>
        @endforeach
    @else
        <div class="no-records">Sin documentos registrados.</div>
    @endif

    <div class="footer">
        <div class="footer-left">
            Sistema TEA &nbsp;·&nbsp; Generado el {{ \Carbon\Carbon::now()->format('d/m/Y H:i') }}
        </div>
        <div class="footer-right">
            Documento de uso interno — Confidencial
        </div>
    </div>

</body>
</html>

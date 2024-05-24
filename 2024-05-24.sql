-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-05-2024 a las 10:00:51
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tea`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `abordajes`
--

CREATE TABLE `abordajes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `abordajes`
--

INSERT INTO `abordajes` (`id`, `description`, `created_at`, `updated_at`) VALUES
(1, 'asdsaasda\nasd\nsa\ndsa', '2024-05-23 08:57:55', '2024-05-23 08:57:55'),
(2, 'asdsaasda\nasd\nsa\ndsa', '2024-05-23 08:58:46', '2024-05-23 08:58:46'),
(3, 'asdsaasda\nasd\nsa\ndsa', '2024-05-23 08:58:55', '2024-05-23 08:58:55'),
(4, 'asdsa', '2024-05-23 09:01:40', '2024-05-23 09:01:40'),
(5, 'asa', '2024-05-23 09:10:29', '2024-05-23 09:10:29'),
(6, 'publicacion de manuales clinicos', '2024-05-23 09:14:12', '2024-05-23 09:14:12'),
(7, 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', '2024-05-23 10:05:34', '2024-05-23 10:05:34'),
(8, 'abordaje de prueba realizado con complemntacion', '2024-05-23 10:14:34', '2024-05-23 10:14:34'),
(9, 'dfghjklñkjhgfghjklkjhgfdghjklkjhgfghkl\nfghgjkljk\nfghjk\nfghjkl}\nvhjnk\nghjnkl', '2024-05-23 11:06:13', '2024-05-23 11:06:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `certificados`
--

CREATE TABLE `certificados` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description` text DEFAULT NULL,
  `etapa_inial` text DEFAULT NULL,
  `aumento` text DEFAULT NULL,
  `crisis` text DEFAULT NULL,
  `hora_inicio` time DEFAULT NULL,
  `hora_llamada` time DEFAULT NULL,
  `hora_llegada` time DEFAULT NULL,
  `hora_termino` time DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `certificados`
--

INSERT INTO `certificados` (`id`, `description`, `etapa_inial`, `aumento`, `crisis`, `hora_inicio`, `hora_llamada`, `hora_llegada`, `hora_termino`, `created_at`, `updated_at`) VALUES
(1, 'asda', '', 'asda', '', NULL, NULL, NULL, NULL, '2024-05-23 10:53:23', '2024-05-23 10:53:23'),
(2, 'asdas', 'asda', 'asd', '', NULL, NULL, NULL, NULL, '2024-05-23 10:53:58', '2024-05-23 10:53:58'),
(3, 'asdsada', 'sada', 'dsadas', 'dsadsa', '10:10:00', NULL, NULL, NULL, '2024-05-24 07:52:02', '2024-05-24 07:52:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contratos`
--

CREATE TABLE `contratos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fecha` date DEFAULT NULL,
  `auxilio` varchar(255) DEFAULT NULL,
  `labor` varchar(255) DEFAULT NULL,
  `si` varchar(255) DEFAULT NULL,
  `no` varchar(255) DEFAULT NULL,
  `lunes_ingres` varchar(255) DEFAULT NULL,
  `martes_ingres` varchar(255) DEFAULT NULL,
  `miercoles_ingres` varchar(255) DEFAULT NULL,
  `jueves_ingres` varchar(255) DEFAULT NULL,
  `viernes_ingres` varchar(255) DEFAULT NULL,
  `lunes_sal` varchar(255) DEFAULT NULL,
  `martes_sal` varchar(255) DEFAULT NULL,
  `miercoles_sal` varchar(255) DEFAULT NULL,
  `jueves_sal` varchar(255) DEFAULT NULL,
  `viernes_sal` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diagnoses`
--

CREATE TABLE `diagnoses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `url_diagnosis` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `diagnoses`
--

INSERT INTO `diagnoses` (`id`, `student_id`, `user_id`, `name`, `url_diagnosis`, `created_at`, `updated_at`) VALUES
(7, 3, 5, 'Para sistema (1)', 'diagnosis/1715684926_Para sistema (1).pdf', '2024-05-14 11:08:46', '2024-05-14 11:08:46'),
(10, 3, 5, 'visor', 'diagnosis/1715729835_visor.pdf', '2024-05-14 23:37:15', '2024-05-14 23:37:15'),
(14, 4, 2, 'EJM_1_PY_UPEA', 'diagnosis/1716111903_EJM_1_PY_UPEA.pdf', '2024-05-19 09:45:03', '2024-05-19 09:45:03'),
(15, 7, 2, 'EJM_2_PY_UPEA', 'diagnosis/1716113302_EJM_2_PY_UPEA.pdf', '2024-05-19 10:08:22', '2024-05-19 10:08:22'),
(16, 7, 2, 'diagnosis (1)', 'diagnosis/1716113334_diagnosis (1).pdf', '2024-05-19 10:08:54', '2024-05-19 10:08:54'),
(17, 4, 2, 'EJM_2_PY_UPEA (2)', 'diagnosis/1716452395_EJM_2_PY_UPEA (2).pdf', '2024-05-23 08:19:55', '2024-05-23 08:19:55'),
(18, 2, 2, 'Manual de demostracion historias clínicas', 'diagnosis/1716452471_Manual de demostracion historias clínicas.pdf', '2024-05-23 08:21:11', '2024-05-23 08:21:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documents`
--

CREATE TABLE `documents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `student_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `documentable_id` bigint(20) UNSIGNED NOT NULL,
  `documentable_type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `documents`
--

INSERT INTO `documents` (`id`, `description`, `date`, `student_id`, `user_id`, `documentable_id`, `documentable_type`, `created_at`, `updated_at`) VALUES
(1, 'AUTORIZACIÓN PARA EL ABORDAJE DEC.', '2024-05-23 04:58:47', 2, 2, 2, 'App\\Models\\Abordaje', '2024-05-23 08:58:47', '2024-05-23 08:58:47'),
(2, 'AUTORIZACIÓN PARA EL ABORDAJE DEC.', '2024-05-23 04:58:55', 2, 2, 3, 'App\\Models\\Abordaje', '2024-05-23 08:58:55', '2024-05-23 08:58:55'),
(4, 'AUTORIZACIÓN PARA EL ABORDAJE DEC.', '2024-05-23 05:10:29', 2, 2, 5, 'App\\Models\\Abordaje', '2024-05-23 09:10:29', '2024-05-23 09:10:29'),
(5, 'AUTORIZACIÓN PARA EL ABORDAJE DEC.', '2024-05-23 05:14:12', 2, 2, 6, 'App\\Models\\Abordaje', '2024-05-23 09:14:12', '2024-05-23 09:14:12'),
(6, 'AUTORIZACIÓN PARA EL ABORDAJE DEC.', '2024-05-23 06:05:34', 9, 2, 7, 'App\\Models\\Abordaje', '2024-05-23 10:05:34', '2024-05-23 10:05:34'),
(10, 'AUTORIZACIÓN PARA EL ABORDAJE DEC.', '2024-05-23 07:06:13', 9, 2, 9, 'App\\Models\\Abordaje', '2024-05-23 11:06:13', '2024-05-23 11:06:13'),
(11, 'CERTIFICADO PARA EL EMPLEADOR', '2024-05-24 03:52:02', 2, 2, 3, 'App\\Models\\Certificado', '2024-05-24 07:52:02', '2024-05-24 07:52:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ficha_plans`
--

CREATE TABLE `ficha_plans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `diagnostico` varchar(255) DEFAULT NULL,
  `fecha_diagnostico` date DEFAULT NULL,
  `psicologo` varchar(255) DEFAULT NULL,
  `educado` varchar(255) DEFAULT NULL,
  `orientador` varchar(255) DEFAULT NULL,
  `otros` varchar(255) DEFAULT NULL,
  `fecha_elaboracion` date DEFAULT NULL,
  `fecha_revision` date DEFAULT NULL,
  `firma` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ficha_seguimientos`
--

CREATE TABLE `ficha_seguimientos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fecha` date DEFAULT NULL,
  `evaluador` varchar(255) DEFAULT NULL,
  `contexto` varchar(255) DEFAULT NULL,
  `emocion` varchar(255) DEFAULT NULL,
  `fisica` varchar(255) DEFAULT NULL,
  `conductales` varchar(255) DEFAULT NULL,
  `duracion` varchar(255) DEFAULT NULL,
  `inteversion` varchar(255) DEFAULT NULL,
  `estrategia` varchar(255) DEFAULT NULL,
  `ayuda` varchar(255) DEFAULT NULL,
  `ayuda_externa` varchar(255) DEFAULT NULL,
  `corto_plaza` varchar(255) DEFAULT NULL,
  `largo_plazo` varchar(255) DEFAULT NULL,
  `seguimiento_fecha` date DEFAULT NULL,
  `responsable` varchar(255) DEFAULT NULL,
  `seguimiento` varchar(255) DEFAULT NULL,
  `instrumentos` varchar(255) DEFAULT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  `factores` varchar(255) DEFAULT NULL,
  `necesidades` varchar(255) DEFAULT NULL,
  `recursos` varchar(255) DEFAULT NULL,
  `coordinacion` varchar(255) DEFAULT NULL,
  `notas` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `histories`
--

CREATE TABLE `histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL,
  `student_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `histories`
--

INSERT INTO `histories` (`id`, `description`, `date`, `student_id`, `user_id`, `created_at`, `updated_at`) VALUES
(7, 'asdsada dsa\nd \nsad\nsa\nd \nasd\n as\nd\na', '2024-05-19', 7, 2, '2024-05-19 10:39:37', '2024-05-19 10:39:37'),
(8, 'Brindar una educación de calidad', '2024-05-19', 7, 2, '2024-05-19 10:39:51', '2024-05-19 10:47:34'),
(9, 'se realizo un histotial\nse odificaod apra casos especiales', '2024-05-23', 2, 2, '2024-05-23 08:21:36', '2024-05-23 08:21:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(5, '0001_01_01_000000_create_users_table', 1),
(6, '0001_01_01_000001_create_cache_table', 1),
(7, '0001_01_01_000002_create_jobs_table', 1),
(8, '2024_05_10_090151_create_personal_access_tokens_table', 1),
(9, '2024_05_10_102849_create_students_table', 2),
(10, '2024_05_10_103237_create_diagnoses_table', 2),
(11, '2024_05_14_095244_create_histories_table', 3),
(12, '2024_05_23_033610_create_abordajes_table', 4),
(13, '2024_05_23_033621_create_certificados_table', 4),
(14, '2024_05_23_033632_create_contratos_table', 4),
(15, '2024_05_23_033646_create_ficha_plans_table', 4),
(16, '2024_05_23_033743_create_plans_table', 4),
(17, '2024_05_23_033758_create_ficha_seguimientos_table', 4),
(18, '2024_05_23_035909_create_plan_asistencias_table', 4),
(19, '2024_05_23_035957_create_plan_mes_table', 4),
(23, '2024_05_23_041000_create_documents_table', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(5, 'App\\Models\\User', 5, 'auth_token', 'dec44fd2453306132f4379c5701155660eeb05d65989b2c1da4ad4779039d6db', '[\"*\"]', '2024-05-10 15:08:04', NULL, '2024-05-10 14:13:58', '2024-05-10 15:08:04'),
(11, 'App\\Models\\User', 6, 'auth_token', '8ebf53e2b145fc43cbee74ac095c3d58d2969926bb36d77828d02fe6dc73b667', '[\"*\"]', '2024-05-15 00:59:56', NULL, '2024-05-15 00:56:49', '2024-05-15 00:59:56'),
(12, 'App\\Models\\User', 2, 'auth_token', '6f4681411eb1dbedb53ae9dedeed70b27ed3817b6c8e8067740fadfd53af14a0', '[\"*\"]', '2024-05-19 23:02:00', NULL, '2024-05-19 09:23:30', '2024-05-19 23:02:00'),
(13, 'App\\Models\\User', 2, 'auth_token', '81795ee7e579476649f5c7e9950fd4f3595b239bd5cd1515aa1b618a80a46186', '[\"*\"]', '2024-05-23 22:06:00', NULL, '2024-05-23 08:19:23', '2024-05-23 22:06:00'),
(14, 'App\\Models\\User', 2, 'auth_token', '1486e977650099ca16a3588a52867898d494deaf11fdb1492d1018e074b2baca', '[\"*\"]', '2024-05-23 08:34:17', NULL, '2024-05-23 08:34:10', '2024-05-23 08:34:17'),
(15, 'App\\Models\\User', 2, 'auth_token', 'd34dfd87596900ab05edb3f54a9ae9cff4b618250400002ac7c849bd28249622', '[\"*\"]', '2024-05-24 07:53:22', NULL, '2024-05-24 07:08:40', '2024-05-24 07:53:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planes`
--

CREATE TABLE `planes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `diag_primario` varchar(255) DEFAULT NULL,
  `diag_secundario` varchar(255) DEFAULT NULL,
  `profesional_especializado` varchar(255) DEFAULT NULL,
  `profesional_especializado_remplazante` varchar(255) DEFAULT NULL,
  `profesor_jefe` varchar(255) DEFAULT NULL,
  `particularidades` varchar(255) DEFAULT NULL,
  `estrategias` varchar(255) DEFAULT NULL,
  `manejo_ambiente` varchar(255) DEFAULT NULL,
  `asistencia` text DEFAULT NULL,
  `intervenciones` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plan_asistencias`
--

CREATE TABLE `plan_asistencias` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `plan_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plan_mes`
--

CREATE TABLE `plan_mes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `mes` varchar(255) DEFAULT NULL,
  `pie` varchar(255) DEFAULT NULL,
  `cantidad_pie` varchar(255) DEFAULT NULL,
  `conv_escolar` varchar(255) DEFAULT NULL,
  `cantidad_conv_escolar` varchar(255) DEFAULT NULL,
  `inspectoria_general` varchar(255) DEFAULT NULL,
  `cantidad_inspectoria_general` varchar(255) DEFAULT NULL,
  `profesor_jefe` varchar(255) DEFAULT NULL,
  `cantidad_profesor_jefe` varchar(255) DEFAULT NULL,
  `orientador` varchar(255) DEFAULT NULL,
  `cantidad_orientador` varchar(255) DEFAULT NULL,
  `motivo` varchar(255) DEFAULT NULL,
  `plan_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `students`
--

CREATE TABLE `students` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rut` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `year_PIE` int(11) NOT NULL,
  `course` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tutorRut` varchar(255) DEFAULT NULL,
  `tutorName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `students`
--

INSERT INTO `students` (`id`, `rut`, `name`, `birthdate`, `year_PIE`, `course`, `year`, `address`, `phone`, `sex`, `created_at`, `updated_at`, `tutorRut`, `tutorName`) VALUES
(2, '123456', 'ADIMER PAUL CHAMBI AJATA', '1989-02-01', 2000, '6ta', 2000, 'calle bolivar', '69645', 'M', '2024-05-14 13:36:59', '2024-05-24 07:51:12', '7845451', 'CARMELO CHAMBI VINAYA'),
(7, '12321', 'FELIZ ARI', '1989-04-02', 2045, '4TO BASICO', 200, 'calle bolivar', '69603027', 'M', '2024-05-19 10:03:21', '2024-05-19 10:03:21', '1234578', 'ADIMER PAUL CAHMBI AJATA'),
(9, '7894545', 'ANGELA SARA APAZA', '2013-10-28', 200, '5TO BASICO', 2000, 'calle olivar', '69603027', 'F', '2024-05-23 10:04:00', '2024-05-23 10:04:00', '7336199', 'ADIMER PAUL CHAMB AJATA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'ADMIN' COMMENT 'ADMIN, ATTORNEY, TEACHER, DOCTOR',
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `role`, `username`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'Administrador', 'ADMIN', 'admin', 'admin@test.com', NULL, '$2a$12$h.oqHc/cmHyRAxPP1NlsleEWQDzPd79A.Z3m/3aBl1kxmegk6/xgG', NULL, NULL, '2024-05-10 14:08:36'),
(3, 'Adimer Paul Chambi Ajata', 'ATTORNEY', 'adimer', NULL, NULL, '$2y$12$OTBWVzSQ3e2MlChMQUtzR.Q/cFKI54IHwYi8IbmVBpOBIfS3UlLXG', NULL, '2024-05-10 13:59:33', '2024-05-10 14:10:13'),
(5, 'Leonela Huanca Pereira', 'TEACHER', 'leo', NULL, NULL, '$2y$12$9vDjUjVxaYKBVMwc22URPuS8eP6HfzFB.AgRz9NUi8LBwnuQ5XUyS', NULL, '2024-05-10 14:13:49', '2024-05-10 14:13:49'),
(6, 'CESAR', 'DOCTOR', 'cesar', NULL, NULL, '$2y$12$1FpU/oNhIg2Dq66zsPTXJeVB7Y.j58BxRCkaHPcBGfTy9T5PmLNpW', NULL, '2024-05-15 00:46:44', '2024-05-15 00:46:44');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `abordajes`
--
ALTER TABLE `abordajes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `certificados`
--
ALTER TABLE `certificados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `contratos`
--
ALTER TABLE `contratos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `diagnoses`
--
ALTER TABLE `diagnoses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `documents_student_id_foreign` (`student_id`),
  ADD KEY `documents_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `ficha_plans`
--
ALTER TABLE `ficha_plans`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ficha_seguimientos`
--
ALTER TABLE `ficha_seguimientos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `histories_student_id_foreign` (`student_id`),
  ADD KEY `histories_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indices de la tabla `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `planes`
--
ALTER TABLE `planes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `plan_asistencias`
--
ALTER TABLE `plan_asistencias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `plan_asistencias_plan_id_foreign` (`plan_id`);

--
-- Indices de la tabla `plan_mes`
--
ALTER TABLE `plan_mes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `plan_mes_plan_id_foreign` (`plan_id`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indices de la tabla `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `abordajes`
--
ALTER TABLE `abordajes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `certificados`
--
ALTER TABLE `certificados`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `contratos`
--
ALTER TABLE `contratos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `diagnoses`
--
ALTER TABLE `diagnoses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `documents`
--
ALTER TABLE `documents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ficha_plans`
--
ALTER TABLE `ficha_plans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ficha_seguimientos`
--
ALTER TABLE `ficha_seguimientos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `histories`
--
ALTER TABLE `histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `planes`
--
ALTER TABLE `planes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `plan_asistencias`
--
ALTER TABLE `plan_asistencias`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `plan_mes`
--
ALTER TABLE `plan_mes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `students`
--
ALTER TABLE `students`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `documents_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `documents_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `histories`
--
ALTER TABLE `histories`
  ADD CONSTRAINT `histories_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `histories_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `plan_asistencias`
--
ALTER TABLE `plan_asistencias`
  ADD CONSTRAINT `plan_asistencias_plan_id_foreign` FOREIGN KEY (`plan_id`) REFERENCES `planes` (`id`);

--
-- Filtros para la tabla `plan_mes`
--
ALTER TABLE `plan_mes`
  ADD CONSTRAINT `plan_mes_plan_id_foreign` FOREIGN KEY (`plan_id`) REFERENCES `planes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
